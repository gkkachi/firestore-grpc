(function() {var implementors = {
"base64":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"base64/enum.DecodeError.html\" title=\"enum base64::DecodeError\">DecodeError</a>"]],
"either":[["impl&lt;L, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt;<span class=\"where fmt-newline\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a>,\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a>,</span>"]],
"futures_channel":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"futures_channel/mpsc/struct.TryRecvError.html\" title=\"struct futures_channel::mpsc::TryRecvError\">TryRecvError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"futures_channel/mpsc/struct.SendError.html\" title=\"struct futures_channel::mpsc::SendError\">SendError</a>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"futures_channel/mpsc/struct.TrySendError.html\" title=\"struct futures_channel::mpsc::TrySendError\">TrySendError</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"futures_channel/oneshot/struct.Canceled.html\" title=\"struct futures_channel::oneshot::Canceled\">Canceled</a>"]],
"getrandom":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"getrandom/struct.Error.html\" title=\"struct getrandom::Error\">Error</a>"]],
"h2":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"h2/struct.Error.html\" title=\"struct h2::Error\">Error</a>"]],
"http":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"http/header/struct.ToStrError.html\" title=\"struct http::header::ToStrError\">ToStrError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"http/header/struct.InvalidHeaderName.html\" title=\"struct http::header::InvalidHeaderName\">InvalidHeaderName</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"http/header/struct.InvalidHeaderValue.html\" title=\"struct http::header::InvalidHeaderValue\">InvalidHeaderValue</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"http/method/struct.InvalidMethod.html\" title=\"struct http::method::InvalidMethod\">InvalidMethod</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"http/status/struct.InvalidStatusCode.html\" title=\"struct http::status::InvalidStatusCode\">InvalidStatusCode</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"http/struct.Error.html\" title=\"struct http::Error\">Error</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"http/uri/struct.InvalidUri.html\" title=\"struct http::uri::InvalidUri\">InvalidUri</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"http/uri/struct.InvalidUriParts.html\" title=\"struct http::uri::InvalidUriParts\">InvalidUriParts</a>"]],
"http_body":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"http_body/struct.LengthLimitError.html\" title=\"struct http_body::LengthLimitError\">LengthLimitError</a>"]],
"httparse":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"httparse/enum.Error.html\" title=\"enum httparse::Error\">Error</a>"]],
"httpdate":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"httpdate/struct.Error.html\" title=\"struct httpdate::Error\">Error</a>"]],
"hyper":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"hyper/struct.Error.html\" title=\"struct hyper::Error\">Error</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"hyper/client/connect/dns/struct.InvalidNameError.html\" title=\"struct hyper::client::connect::dns::InvalidNameError\">InvalidNameError</a>"]],
"itertools":[["impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"itertools/structs/struct.ExactlyOneError.html\" title=\"struct itertools::structs::ExactlyOneError\">ExactlyOneError</a>&lt;I&gt;<span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    I::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.72.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item\" title=\"type core::iter::traits::iterator::Iterator::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</span>"]],
"proc_macro2":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"proc_macro2/struct.LexError.html\" title=\"struct proc_macro2::LexError\">LexError</a>"]],
"prost":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"prost/struct.EncodeError.html\" title=\"struct prost::EncodeError\">EncodeError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"prost/struct.DecodeError.html\" title=\"struct prost::DecodeError\">DecodeError</a>"]],
"prost_types":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"prost_types/struct.TimestampOutOfSystemRangeError.html\" title=\"struct prost_types::TimestampOutOfSystemRangeError\">TimestampOutOfSystemRangeError</a>"]],
"rand":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"rand/rngs/adapter/struct.ReadError.html\" title=\"struct rand::rngs::adapter::ReadError\">ReadError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"rand/distributions/enum.WeightedError.html\" title=\"enum rand::distributions::WeightedError\">WeightedError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"rand/distributions/enum.BernoulliError.html\" title=\"enum rand::distributions::BernoulliError\">BernoulliError</a>"]],
"rand_core":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"rand_core/struct.Error.html\" title=\"struct rand_core::Error\">Error</a>"]],
"rustls":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"rustls/enum.TLSError.html\" title=\"enum rustls::TLSError\">TLSError</a>"]],
"tokio":[["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"tokio/sync/mpsc/error/enum.TrySendError.html\" title=\"enum tokio::sync::mpsc::error::TrySendError\">TrySendError</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/time/error/struct.Elapsed.html\" title=\"struct tokio::time::error::Elapsed\">Elapsed</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"tokio/sync/oneshot/error/enum.TryRecvError.html\" title=\"enum tokio::sync::oneshot::error::TryRecvError\">TryRecvError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/sync/struct.AcquireError.html\" title=\"struct tokio::sync::AcquireError\">AcquireError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"tokio/sync/broadcast/error/enum.TryRecvError.html\" title=\"enum tokio::sync::broadcast::error::TryRecvError\">TryRecvError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/sync/watch/error/struct.RecvError.html\" title=\"struct tokio::sync::watch::error::RecvError\">RecvError</a>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/sync/mpsc/error/struct.SendError.html\" title=\"struct tokio::sync::mpsc::error::SendError\">SendError</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/time/error/struct.Error.html\" title=\"struct tokio::time::error::Error\">Error</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/sync/struct.TryLockError.html\" title=\"struct tokio::sync::TryLockError\">TryLockError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/net/unix/struct.ReuniteError.html\" title=\"struct tokio::net::unix::ReuniteError\">ReuniteError</a>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/sync/watch/error/struct.SendError.html\" title=\"struct tokio::sync::watch::error::SendError\">SendError</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"tokio/sync/enum.SetError.html\" title=\"enum tokio::sync::SetError\">SetError</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"tokio/sync/enum.TryAcquireError.html\" title=\"enum tokio::sync::TryAcquireError\">TryAcquireError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"tokio/sync/broadcast/error/enum.RecvError.html\" title=\"enum tokio::sync::broadcast::error::RecvError\">RecvError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/sync/oneshot/error/struct.RecvError.html\" title=\"struct tokio::sync::oneshot::error::RecvError\">RecvError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/net/tcp/struct.ReuniteError.html\" title=\"struct tokio::net::tcp::ReuniteError\">ReuniteError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/task/struct.JoinError.html\" title=\"struct tokio::task::JoinError\">JoinError</a>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"tokio/sync/mpsc/error/enum.SendTimeoutError.html\" title=\"enum tokio::sync::mpsc::error::SendTimeoutError\">SendTimeoutError</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"tokio/sync/mpsc/error/enum.TryRecvError.html\" title=\"enum tokio::sync::mpsc::error::TryRecvError\">TryRecvError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/runtime/struct.TryCurrentError.html\" title=\"struct tokio::runtime::TryCurrentError\">TryCurrentError</a>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/sync/broadcast/error/struct.SendError.html\" title=\"struct tokio::sync::broadcast::error::SendError\">SendError</a>&lt;T&gt;"]],
"tokio_stream":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio_stream/struct.Elapsed.html\" title=\"struct tokio_stream::Elapsed\">Elapsed</a>"]],
"tokio_util":[["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio_util/sync/struct.PollSendError.html\" title=\"struct tokio_util::sync::PollSendError\">PollSendError</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"tokio_util/codec/enum.LinesCodecError.html\" title=\"enum tokio_util::codec::LinesCodecError\">LinesCodecError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"tokio_util/codec/enum.AnyDelimiterCodecError.html\" title=\"enum tokio_util::codec::AnyDelimiterCodecError\">AnyDelimiterCodecError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio_util/codec/length_delimited/struct.LengthDelimitedCodecError.html\" title=\"struct tokio_util::codec::length_delimited::LengthDelimitedCodecError\">LengthDelimitedCodecError</a>"]],
"tonic":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tonic/metadata/errors/struct.InvalidMetadataValueBytes.html\" title=\"struct tonic::metadata::errors::InvalidMetadataValueBytes\">InvalidMetadataValueBytes</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tonic/metadata/errors/struct.ToStrError.html\" title=\"struct tonic::metadata::errors::ToStrError\">ToStrError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tonic/metadata/errors/struct.InvalidMetadataKey.html\" title=\"struct tonic::metadata::errors::InvalidMetadataKey\">InvalidMetadataKey</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tonic/metadata/errors/struct.InvalidMetadataValue.html\" title=\"struct tonic::metadata::errors::InvalidMetadataValue\">InvalidMetadataValue</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tonic/struct.Status.html\" title=\"struct tonic::Status\">Status</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tonic/transport/struct.TimeoutExpired.html\" title=\"struct tonic::transport::TimeoutExpired\">TimeoutExpired</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tonic/transport/struct.Error.html\" title=\"struct tonic::transport::Error\">Error</a>"]],
"tower":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tower/balance/error/struct.Discover.html\" title=\"struct tower::balance::error::Discover\">Discover</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tower/buffer/error/struct.ServiceError.html\" title=\"struct tower::buffer::error::ServiceError\">ServiceError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tower/timeout/error/struct.Elapsed.html\" title=\"struct tower::timeout::error::Elapsed\">Elapsed</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tower/util/error/optional/struct.None.html\" title=\"struct tower::util::error::optional::None\">None</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tower/buffer/error/struct.Closed.html\" title=\"struct tower::buffer::error::Closed\">Closed</a>"],["impl&lt;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tower/ready_cache/error/struct.Failed.html\" title=\"struct tower::ready_cache::error::Failed\">Failed</a>&lt;K&gt;"]],
"tracing_core":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tracing_core/metadata/struct.ParseLevelFilterError.html\" title=\"struct tracing_core::metadata::ParseLevelFilterError\">ParseLevelFilterError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tracing_core/metadata/struct.ParseLevelError.html\" title=\"struct tracing_core::metadata::ParseLevelError\">ParseLevelError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tracing_core/dispatcher/struct.SetGlobalDefaultError.html\" title=\"struct tracing_core::dispatcher::SetGlobalDefaultError\">SetGlobalDefaultError</a>"]],
"webpki":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"webpki/struct.InvalidDNSNameError.html\" title=\"struct webpki::InvalidDNSNameError\">InvalidDNSNameError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"webpki/enum.Error.html\" title=\"enum webpki::Error\">Error</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()