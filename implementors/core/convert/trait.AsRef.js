(function() {var implementors = {
"anyhow":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static&gt; for <a class=\"struct\" href=\"anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> + 'static&gt; for <a class=\"struct\" href=\"anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>"]],
"bytes":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"bytes/struct.BytesMut.html\" title=\"struct bytes::BytesMut\">BytesMut</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"bytes/struct.Bytes.html\" title=\"struct bytes::Bytes\">Bytes</a>"]],
"either":[["impl&lt;L, R, Target&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.slice.html\">[Target]</a>&gt; for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt;<span class=\"where fmt-newline\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.slice.html\">[Target]</a>&gt;,\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.slice.html\">[Target]</a>&gt;,</span>"],["impl&lt;L, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.70.0/std/ffi/os_str/struct.OsStr.html\" title=\"struct std::ffi::os_str::OsStr\">OsStr</a>&gt; for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt;<span class=\"where fmt-newline\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.70.0/std/ffi/os_str/struct.OsStr.html\" title=\"struct std::ffi::os_str::OsStr\">OsStr</a>&gt;,\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.70.0/std/ffi/os_str/struct.OsStr.html\" title=\"struct std::ffi::os_str::OsStr\">OsStr</a>&gt;,</span>"],["impl&lt;L, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.str.html\">str</a>&gt; for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt;<span class=\"where fmt-newline\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.str.html\">str</a>&gt;,\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.str.html\">str</a>&gt;,</span>"],["impl&lt;L, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.70.0/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt; for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt;<span class=\"where fmt-newline\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.70.0/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt;,\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.70.0/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt;,</span>"],["impl&lt;L, R, Target&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;Target&gt; for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt;<span class=\"where fmt-newline\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;Target&gt;,\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;Target&gt;,</span>"],["impl&lt;L, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.70.0/core/ffi/c_str/struct.CStr.html\" title=\"struct core::ffi::c_str::CStr\">CStr</a>&gt; for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt;<span class=\"where fmt-newline\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.70.0/core/ffi/c_str/struct.CStr.html\" title=\"struct core::ffi::c_str::CStr\">CStr</a>&gt;,\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.70.0/core/ffi/c_str/struct.CStr.html\" title=\"struct core::ffi::c_str::CStr\">CStr</a>&gt;,</span>"]],
"h2":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"h2/ext/struct.Protocol.html\" title=\"struct h2::ext::Protocol\">Protocol</a>"]],
"http":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"http/header/struct.HeaderName.html\" title=\"struct http::header::HeaderName\">HeaderName</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"http/method/struct.Method.html\" title=\"struct http::method::Method\">Method</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"http/header/struct.HeaderValue.html\" title=\"struct http::header::HeaderValue\">HeaderValue</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"http/header/struct.HeaderName.html\" title=\"struct http::header::HeaderName\">HeaderName</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"http/uri/struct.Authority.html\" title=\"struct http::uri::Authority\">Authority</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"http/uri/struct.Scheme.html\" title=\"struct http::uri::Scheme\">Scheme</a>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"http/uri/struct.Port.html\" title=\"struct http::uri::Port\">Port</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.str.html\">str</a>&gt;,</span>"]],
"hyper":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"hyper/ext/struct.Protocol.html\" title=\"struct hyper::ext::Protocol\">Protocol</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"hyper/ext/struct.ReasonPhrase.html\" title=\"struct hyper::ext::ReasonPhrase\">ReasonPhrase</a>"]],
"ring":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.array.html\">12</a>]&gt; for <a class=\"struct\" href=\"ring/aead/struct.Nonce.html\" title=\"struct ring::aead::Nonce\">Nonce</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"ring/agreement/struct.PublicKey.html\" title=\"struct ring::agreement::PublicKey\">PublicKey</a>"],["impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"ring/aead/struct.Aad.html\" title=\"struct ring::aead::Aad\">Aad</a>&lt;A&gt;<span class=\"where fmt-newline\">where\n    A: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u8.html\">u8</a>]&gt;,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"ring/digest/struct.Digest.html\" title=\"struct ring::digest::Digest\">Digest</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"ring/pkcs8/struct.Document.html\" title=\"struct ring::pkcs8::Document\">Document</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"ring/signature/struct.Signature.html\" title=\"struct ring::signature::Signature\">Signature</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"ring/signature/struct.RsaSubjectPublicKey.html\" title=\"struct ring::signature::RsaSubjectPublicKey\">RsaSubjectPublicKey</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"ring/aead/struct.Tag.html\" title=\"struct ring::aead::Tag\">Tag</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"ring/hmac/struct.Tag.html\" title=\"struct ring::hmac::Tag\">Tag</a>"]],
"rustls":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"rustls/struct.Certificate.html\" title=\"struct rustls::Certificate\">Certificate</a>"]],
"tokio":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"tokio/net/struct.UnixStream.html\" title=\"struct tokio::net::UnixStream\">UnixStream</a>&gt; for <a class=\"struct\" href=\"tokio/net/unix/struct.ReadHalf.html\" title=\"struct tokio::net::unix::ReadHalf\">ReadHalf</a>&lt;'_&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"tokio/net/struct.TcpStream.html\" title=\"struct tokio::net::TcpStream\">TcpStream</a>&gt; for <a class=\"struct\" href=\"tokio/net/tcp/struct.OwnedWriteHalf.html\" title=\"struct tokio::net::tcp::OwnedWriteHalf\">OwnedWriteHalf</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"tokio/net/struct.UnixStream.html\" title=\"struct tokio::net::UnixStream\">UnixStream</a>&gt; for <a class=\"struct\" href=\"tokio/net/unix/struct.OwnedWriteHalf.html\" title=\"struct tokio::net::unix::OwnedWriteHalf\">OwnedWriteHalf</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"tokio/net/struct.UnixStream.html\" title=\"struct tokio::net::UnixStream\">UnixStream</a>&gt; for <a class=\"struct\" href=\"tokio/net/unix/struct.OwnedReadHalf.html\" title=\"struct tokio::net::unix::OwnedReadHalf\">OwnedReadHalf</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"tokio/net/struct.TcpStream.html\" title=\"struct tokio::net::TcpStream\">TcpStream</a>&gt; for <a class=\"struct\" href=\"tokio/net/tcp/struct.WriteHalf.html\" title=\"struct tokio::net::tcp::WriteHalf\">WriteHalf</a>&lt;'_&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"tokio/net/struct.TcpStream.html\" title=\"struct tokio::net::TcpStream\">TcpStream</a>&gt; for <a class=\"struct\" href=\"tokio/net/tcp/struct.OwnedReadHalf.html\" title=\"struct tokio::net::tcp::OwnedReadHalf\">OwnedReadHalf</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"tokio/net/struct.UnixStream.html\" title=\"struct tokio::net::UnixStream\">UnixStream</a>&gt; for <a class=\"struct\" href=\"tokio/net/unix/struct.WriteHalf.html\" title=\"struct tokio::net::unix::WriteHalf\">WriteHalf</a>&lt;'_&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"tokio/net/struct.TcpStream.html\" title=\"struct tokio::net::TcpStream\">TcpStream</a>&gt; for <a class=\"struct\" href=\"tokio/net/tcp/struct.ReadHalf.html\" title=\"struct tokio::net::tcp::ReadHalf\">ReadHalf</a>&lt;'_&gt;"]],
"tokio_stream":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"tokio/time/interval/struct.Interval.html\" title=\"struct tokio::time::interval::Interval\">Interval</a>&gt; for <a class=\"struct\" href=\"tokio_stream/wrappers/struct.IntervalStream.html\" title=\"struct tokio_stream::wrappers::IntervalStream\">IntervalStream</a>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"tokio/sync/mpsc/unbounded/struct.UnboundedReceiver.html\" title=\"struct tokio::sync::mpsc::unbounded::UnboundedReceiver\">UnboundedReceiver</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"tokio_stream/wrappers/struct.UnboundedReceiverStream.html\" title=\"struct tokio_stream::wrappers::UnboundedReceiverStream\">UnboundedReceiverStream</a>&lt;T&gt;"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"tokio/sync/mpsc/bounded/struct.Receiver.html\" title=\"struct tokio::sync::mpsc::bounded::Receiver\">Receiver</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"tokio_stream/wrappers/struct.ReceiverStream.html\" title=\"struct tokio_stream::wrappers::ReceiverStream\">ReceiverStream</a>&lt;T&gt;"]],
"tokio_util":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"tokio/sync/semaphore/struct.Semaphore.html\" title=\"struct tokio::sync::semaphore::Semaphore\">Semaphore</a>&gt; for <a class=\"struct\" href=\"tokio_util/sync/struct.PollSemaphore.html\" title=\"struct tokio_util::sync::PollSemaphore\">PollSemaphore</a>"]],
"tonic":[["impl&lt;VE: ValueEncoding&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"tonic/metadata/struct.MetadataKey.html\" title=\"struct tonic::metadata::MetadataKey\">MetadataKey</a>&lt;VE&gt;"],["impl&lt;VE: ValueEncoding&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"tonic/metadata/struct.MetadataKey.html\" title=\"struct tonic::metadata::MetadataKey\">MetadataKey</a>&lt;VE&gt;"],["impl&lt;VE: ValueEncoding&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"tonic/metadata/struct.MetadataValue.html\" title=\"struct tonic::metadata::MetadataValue\">MetadataValue</a>&lt;VE&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"tonic/transport/struct.Certificate.html\" title=\"struct tonic::transport::Certificate\">Certificate</a>"]],
"tracing_core":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"tracing_core/struct.Field.html\" title=\"struct tracing_core::Field\">Field</a>"]],
"webpki":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"webpki/struct.DNSName.html\" title=\"struct webpki::DNSName\">DNSName</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()