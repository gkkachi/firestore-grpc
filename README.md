# firestore-grpc

Firestore client library for Rust.
If you use Cloud Run, please use https://github.com/gkkachi/firestore-grpc-cloudrun instead, which provides some useful functions such as `get_client()`, `get_project_id()`.

## Example

This example is experimental.
In a real situation, you need to implement features such as token updates.

### Environment variables

```shell
export PROJECT_ID=YOUR_PROJECT_ID
export TOKEN=`gcloud auth print-access-token`
```

### Code

#### `Cargo.toml`

```toml
[dependencies]
firestore_grpc = "0.31"
tokio = {version = "0.2", features = ["full"]}
```

#### `main.rs`

```rust
use firestore_grpc::tonic::{
    metadata::MetadataValue,
    transport::{Channel, ClientTlsConfig},
    Request,
};
use firestore_grpc::v1::{
    firestore_client::FirestoreClient, value::ValueType, CreateDocumentRequest, Document, Value,
};
use std::env;

const URL: &'static str = "https://firestore.googleapis.com";
const DOMAIN: &'static str = "firestore.googleapis.com";

pub type BoxError = Box<dyn std::error::Error + Sync + Send + 'static>;

fn get_token() -> String {
    env::var("TOKEN").unwrap()
}

fn get_project_id() -> String {
    env::var("PROJECT_ID").unwrap()
}

async fn get_client() -> Result<FirestoreClient<Channel>, BoxError> {
    let endpoint = Channel::from_static(URL).tls_config(ClientTlsConfig::new().domain_name(DOMAIN));

    let bearer_token = format!("Bearer {}", get_token());
    let header_value = MetadataValue::from_str(&bearer_token)?;

    let channel = endpoint.connect().await?;

    let service = FirestoreClient::with_interceptor(channel, move |mut req: Request<()>| {
        req.metadata_mut()
            .insert("authorization", header_value.clone());
        Ok(req)
    });
    Ok(service)
}

async fn create_document() -> Result<Document, BoxError> {
    let parent = format!(
        "projects/{}/databases/(default)/documents",
        get_project_id()
    );
    let collection_id = "greetings".into();
    let document_id = "".into();
    let mut fields = std::collections::HashMap::new();
    fields.insert(
        "message".into(),
        Value {
            value_type: Some(ValueType::StringValue("Hello world!".into())),
        },
    );
    let document = Some(Document {
        name: "".into(),
        fields,
        create_time: None,
        update_time: None,
    });
    let res = get_client()
        .await?
        .create_document(CreateDocumentRequest {
            parent,
            collection_id,
            document_id,
            document,
            mask: None,
        })
        .await?;
    Ok(res.into_inner())
}

#[tokio::main]
async fn main() {
    create_document().await.unwrap();
}
```
