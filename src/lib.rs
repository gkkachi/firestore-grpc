pub mod google {
    pub mod firestore {
        pub mod v1 {
            tonic::include_proto!("google.firestore.v1");
        }
        pub mod v1beta1 {
            tonic::include_proto!("google.firestore.v1beta1");
        }
    }
    pub mod rpc {
        tonic::include_proto!("google.rpc");
    }
    pub mod r#type {
        tonic::include_proto!("google.r#type");
    }
}

pub use google::firestore::*;
pub use tonic;
