(function() {var implementors = {};
implementors["base64"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"base64/enum.DecodeError.html\" title=\"enum base64::DecodeError\">DecodeError</a>","synthetic":false,"types":["base64::decode::DecodeError"]}];
implementors["either"] = [{"text":"impl&lt;L, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a>,&nbsp;</span>","synthetic":false,"types":["either::Either"]}];
implementors["futures_channel"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"futures_channel/mpsc/struct.SendError.html\" title=\"struct futures_channel::mpsc::SendError\">SendError</a>","synthetic":false,"types":["futures_channel::mpsc::SendError"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"futures_channel/mpsc/struct.TrySendError.html\" title=\"struct futures_channel::mpsc::TrySendError\">TrySendError</a>&lt;T&gt;","synthetic":false,"types":["futures_channel::mpsc::TrySendError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"futures_channel/mpsc/struct.TryRecvError.html\" title=\"struct futures_channel::mpsc::TryRecvError\">TryRecvError</a>","synthetic":false,"types":["futures_channel::mpsc::TryRecvError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"futures_channel/oneshot/struct.Canceled.html\" title=\"struct futures_channel::oneshot::Canceled\">Canceled</a>","synthetic":false,"types":["futures_channel::oneshot::Canceled"]}];
implementors["getrandom"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"getrandom/struct.Error.html\" title=\"struct getrandom::Error\">Error</a>","synthetic":false,"types":["getrandom::error::Error"]}];
implementors["h2"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"h2/struct.Error.html\" title=\"struct h2::Error\">Error</a>","synthetic":false,"types":["h2::error::Error"]}];
implementors["http"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"http/header/struct.InvalidHeaderName.html\" title=\"struct http::header::InvalidHeaderName\">InvalidHeaderName</a>","synthetic":false,"types":["http::header::name::InvalidHeaderName"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"http/header/struct.InvalidHeaderValue.html\" title=\"struct http::header::InvalidHeaderValue\">InvalidHeaderValue</a>","synthetic":false,"types":["http::header::value::InvalidHeaderValue"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"http/header/struct.ToStrError.html\" title=\"struct http::header::ToStrError\">ToStrError</a>","synthetic":false,"types":["http::header::value::ToStrError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"http/method/struct.InvalidMethod.html\" title=\"struct http::method::InvalidMethod\">InvalidMethod</a>","synthetic":false,"types":["http::method::InvalidMethod"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"http/status/struct.InvalidStatusCode.html\" title=\"struct http::status::InvalidStatusCode\">InvalidStatusCode</a>","synthetic":false,"types":["http::status::InvalidStatusCode"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"http/uri/struct.InvalidUri.html\" title=\"struct http::uri::InvalidUri\">InvalidUri</a>","synthetic":false,"types":["http::uri::InvalidUri"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"http/uri/struct.InvalidUriParts.html\" title=\"struct http::uri::InvalidUriParts\">InvalidUriParts</a>","synthetic":false,"types":["http::uri::InvalidUriParts"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"http/struct.Error.html\" title=\"struct http::Error\">Error</a>","synthetic":false,"types":["http::error::Error"]}];
implementors["http_body"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"http_body/struct.LengthLimitError.html\" title=\"struct http_body::LengthLimitError\">LengthLimitError</a>","synthetic":false,"types":["http_body::limited::LengthLimitError"]}];
implementors["httparse"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"httparse/enum.Error.html\" title=\"enum httparse::Error\">Error</a>","synthetic":false,"types":["httparse::Error"]}];
implementors["httpdate"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"httpdate/struct.Error.html\" title=\"struct httpdate::Error\">Error</a>","synthetic":false,"types":["httpdate::Error"]}];
implementors["hyper"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"hyper/struct.Error.html\" title=\"struct hyper::Error\">Error</a>","synthetic":false,"types":["hyper::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"hyper/client/connect/dns/struct.InvalidNameError.html\" title=\"struct hyper::client::connect::dns::InvalidNameError\">InvalidNameError</a>","synthetic":false,"types":["hyper::client::connect::dns::InvalidNameError"]}];
implementors["itertools"] = [{"text":"impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"itertools/structs/struct.ExactlyOneError.html\" title=\"struct itertools::structs::ExactlyOneError\">ExactlyOneError</a>&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;I::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item\" title=\"type core::iter::traits::iterator::Iterator::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,&nbsp;</span>","synthetic":false,"types":["itertools::exactly_one_err::ExactlyOneError"]}];
implementors["proc_macro2"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"proc_macro2/struct.LexError.html\" title=\"struct proc_macro2::LexError\">LexError</a>","synthetic":false,"types":["proc_macro2::LexError"]}];
implementors["prost"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"prost/struct.DecodeError.html\" title=\"struct prost::DecodeError\">DecodeError</a>","synthetic":false,"types":["prost::error::DecodeError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"prost/struct.EncodeError.html\" title=\"struct prost::EncodeError\">EncodeError</a>","synthetic":false,"types":["prost::error::EncodeError"]}];
implementors["prost_types"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"prost_types/struct.TimestampOutOfSystemRangeError.html\" title=\"struct prost_types::TimestampOutOfSystemRangeError\">TimestampOutOfSystemRangeError</a>","synthetic":false,"types":["prost_types::TimestampOutOfSystemRangeError"]}];
implementors["rand"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"rand/distributions/enum.BernoulliError.html\" title=\"enum rand::distributions::BernoulliError\">BernoulliError</a>","synthetic":false,"types":["rand::distributions::bernoulli::BernoulliError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"rand/distributions/weighted/enum.WeightedError.html\" title=\"enum rand::distributions::weighted::WeightedError\">WeightedError</a>","synthetic":false,"types":["rand::distributions::weighted_index::WeightedError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"rand/rngs/adapter/struct.ReadError.html\" title=\"struct rand::rngs::adapter::ReadError\">ReadError</a>","synthetic":false,"types":["rand::rngs::adapter::read::ReadError"]}];
implementors["rand_core"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"rand_core/struct.Error.html\" title=\"struct rand_core::Error\">Error</a>","synthetic":false,"types":["rand_core::error::Error"]}];
implementors["rustls"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"rustls/enum.TLSError.html\" title=\"enum rustls::TLSError\">TLSError</a>","synthetic":false,"types":["rustls::error::TLSError"]}];
implementors["syn"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"syn/parse/struct.Error.html\" title=\"struct syn::parse::Error\">Error</a>","synthetic":false,"types":["syn::error::Error"]}];
implementors["tokio"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/net/tcp/struct.ReuniteError.html\" title=\"struct tokio::net::tcp::ReuniteError\">ReuniteError</a>","synthetic":false,"types":["tokio::net::tcp::split_owned::ReuniteError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/net/unix/struct.ReuniteError.html\" title=\"struct tokio::net::unix::ReuniteError\">ReuniteError</a>","synthetic":false,"types":["tokio::net::unix::split_owned::ReuniteError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/task/struct.JoinError.html\" title=\"struct tokio::task::JoinError\">JoinError</a>","synthetic":false,"types":["tokio::runtime::task::error::JoinError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/runtime/struct.TryCurrentError.html\" title=\"struct tokio::runtime::TryCurrentError\">TryCurrentError</a>","synthetic":false,"types":["tokio::runtime::handle::TryCurrentError"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/sync/broadcast/error/struct.SendError.html\" title=\"struct tokio::sync::broadcast::error::SendError\">SendError</a>&lt;T&gt;","synthetic":false,"types":["tokio::sync::broadcast::error::SendError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"tokio/sync/broadcast/error/enum.RecvError.html\" title=\"enum tokio::sync::broadcast::error::RecvError\">RecvError</a>","synthetic":false,"types":["tokio::sync::broadcast::error::RecvError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"tokio/sync/broadcast/error/enum.TryRecvError.html\" title=\"enum tokio::sync::broadcast::error::TryRecvError\">TryRecvError</a>","synthetic":false,"types":["tokio::sync::broadcast::error::TryRecvError"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/sync/mpsc/error/struct.SendError.html\" title=\"struct tokio::sync::mpsc::error::SendError\">SendError</a>&lt;T&gt;","synthetic":false,"types":["tokio::sync::mpsc::error::SendError"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"tokio/sync/mpsc/error/enum.TrySendError.html\" title=\"enum tokio::sync::mpsc::error::TrySendError\">TrySendError</a>&lt;T&gt;","synthetic":false,"types":["tokio::sync::mpsc::error::TrySendError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"tokio/sync/mpsc/error/enum.TryRecvError.html\" title=\"enum tokio::sync::mpsc::error::TryRecvError\">TryRecvError</a>","synthetic":false,"types":["tokio::sync::mpsc::error::TryRecvError"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"tokio/sync/mpsc/error/enum.SendTimeoutError.html\" title=\"enum tokio::sync::mpsc::error::SendTimeoutError\">SendTimeoutError</a>&lt;T&gt;","synthetic":false,"types":["tokio::sync::mpsc::error::SendTimeoutError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/sync/struct.TryLockError.html\" title=\"struct tokio::sync::TryLockError\">TryLockError</a>","synthetic":false,"types":["tokio::sync::mutex::TryLockError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/sync/oneshot/error/struct.RecvError.html\" title=\"struct tokio::sync::oneshot::error::RecvError\">RecvError</a>","synthetic":false,"types":["tokio::sync::oneshot::error::RecvError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"tokio/sync/oneshot/error/enum.TryRecvError.html\" title=\"enum tokio::sync::oneshot::error::TryRecvError\">TryRecvError</a>","synthetic":false,"types":["tokio::sync::oneshot::error::TryRecvError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/sync/struct.AcquireError.html\" title=\"struct tokio::sync::AcquireError\">AcquireError</a>","synthetic":false,"types":["tokio::sync::batch_semaphore::AcquireError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"tokio/sync/enum.TryAcquireError.html\" title=\"enum tokio::sync::TryAcquireError\">TryAcquireError</a>","synthetic":false,"types":["tokio::sync::batch_semaphore::TryAcquireError"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"tokio/sync/enum.SetError.html\" title=\"enum tokio::sync::SetError\">SetError</a>&lt;T&gt;","synthetic":false,"types":["tokio::sync::once_cell::SetError"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/sync/watch/error/struct.SendError.html\" title=\"struct tokio::sync::watch::error::SendError\">SendError</a>&lt;T&gt;","synthetic":false,"types":["tokio::sync::watch::error::SendError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/sync/watch/error/struct.RecvError.html\" title=\"struct tokio::sync::watch::error::RecvError\">RecvError</a>","synthetic":false,"types":["tokio::sync::watch::error::RecvError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/time/error/struct.Error.html\" title=\"struct tokio::time::error::Error\">Error</a>","synthetic":false,"types":["tokio::time::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/time/error/struct.Elapsed.html\" title=\"struct tokio::time::error::Elapsed\">Elapsed</a>","synthetic":false,"types":["tokio::time::error::Elapsed"]}];
implementors["tokio_util"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio_util/codec/length_delimited/struct.LengthDelimitedCodecError.html\" title=\"struct tokio_util::codec::length_delimited::LengthDelimitedCodecError\">LengthDelimitedCodecError</a>","synthetic":false,"types":["tokio_util::codec::length_delimited::LengthDelimitedCodecError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"tokio_util/codec/enum.LinesCodecError.html\" title=\"enum tokio_util::codec::LinesCodecError\">LinesCodecError</a>","synthetic":false,"types":["tokio_util::codec::lines_codec::LinesCodecError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"tokio_util/codec/enum.AnyDelimiterCodecError.html\" title=\"enum tokio_util::codec::AnyDelimiterCodecError\">AnyDelimiterCodecError</a>","synthetic":false,"types":["tokio_util::codec::any_delimiter_codec::AnyDelimiterCodecError"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio_util/sync/struct.PollSendError.html\" title=\"struct tokio_util::sync::PollSendError\">PollSendError</a>&lt;T&gt;","synthetic":false,"types":["tokio_util::sync::mpsc::PollSendError"]}];
implementors["tonic"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tonic/metadata/errors/struct.InvalidMetadataValue.html\" title=\"struct tonic::metadata::errors::InvalidMetadataValue\">InvalidMetadataValue</a>","synthetic":false,"types":["tonic::metadata::encoding::InvalidMetadataValue"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tonic/metadata/errors/struct.InvalidMetadataValueBytes.html\" title=\"struct tonic::metadata::errors::InvalidMetadataValueBytes\">InvalidMetadataValueBytes</a>","synthetic":false,"types":["tonic::metadata::encoding::InvalidMetadataValueBytes"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tonic/metadata/errors/struct.InvalidMetadataKey.html\" title=\"struct tonic::metadata::errors::InvalidMetadataKey\">InvalidMetadataKey</a>","synthetic":false,"types":["tonic::metadata::key::InvalidMetadataKey"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tonic/metadata/errors/struct.ToStrError.html\" title=\"struct tonic::metadata::errors::ToStrError\">ToStrError</a>","synthetic":false,"types":["tonic::metadata::value::ToStrError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tonic/transport/struct.Error.html\" title=\"struct tonic::transport::Error\">Error</a>","synthetic":false,"types":["tonic::transport::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tonic/transport/struct.TimeoutExpired.html\" title=\"struct tonic::transport::TimeoutExpired\">TimeoutExpired</a>","synthetic":false,"types":["tonic::transport::service::grpc_timeout::TimeoutExpired"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tonic/struct.Status.html\" title=\"struct tonic::Status\">Status</a>","synthetic":false,"types":["tonic::status::Status"]}];
implementors["tower"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tower/balance/error/struct.Discover.html\" title=\"struct tower::balance::error::Discover\">Discover</a>","synthetic":false,"types":["tower::balance::error::Discover"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tower/buffer/error/struct.ServiceError.html\" title=\"struct tower::buffer::error::ServiceError\">ServiceError</a>","synthetic":false,"types":["tower::buffer::error::ServiceError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tower/buffer/error/struct.Closed.html\" title=\"struct tower::buffer::error::Closed\">Closed</a>","synthetic":false,"types":["tower::buffer::error::Closed"]},{"text":"impl&lt;K:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tower/ready_cache/error/struct.Failed.html\" title=\"struct tower::ready_cache::error::Failed\">Failed</a>&lt;K&gt;","synthetic":false,"types":["tower::ready_cache::error::Failed"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tower/timeout/error/struct.Elapsed.html\" title=\"struct tower::timeout::error::Elapsed\">Elapsed</a>","synthetic":false,"types":["tower::timeout::error::Elapsed"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tower/util/error/optional/struct.None.html\" title=\"struct tower::util::error::optional::None\">None</a>","synthetic":false,"types":["tower::util::optional::error::None"]}];
implementors["tracing_core"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tracing_core/dispatcher/struct.SetGlobalDefaultError.html\" title=\"struct tracing_core::dispatcher::SetGlobalDefaultError\">SetGlobalDefaultError</a>","synthetic":false,"types":["tracing_core::dispatcher::SetGlobalDefaultError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tracing_core/metadata/struct.ParseLevelError.html\" title=\"struct tracing_core::metadata::ParseLevelError\">ParseLevelError</a>","synthetic":false,"types":["tracing_core::metadata::ParseLevelError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tracing_core/metadata/struct.ParseLevelFilterError.html\" title=\"struct tracing_core::metadata::ParseLevelFilterError\">ParseLevelFilterError</a>","synthetic":false,"types":["tracing_core::metadata::ParseLevelFilterError"]}];
implementors["webpki"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"webpki/enum.Error.html\" title=\"enum webpki::Error\">Error</a>","synthetic":false,"types":["webpki::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"webpki/struct.InvalidDNSNameError.html\" title=\"struct webpki::InvalidDNSNameError\">InvalidDNSNameError</a>","synthetic":false,"types":["webpki::name::InvalidDNSNameError"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()