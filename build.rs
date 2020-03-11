fn main() -> Result<(), Box<dyn std::error::Error>> {
    tonic_build::configure().build_server(false).compile(
        &[
            "proto/google/firestore/v1/firestore.proto",
            "proto/google/firestore/v1beta1/firestore.proto",
        ],
        &["proto"],
    )?;
    Ok(())
}
