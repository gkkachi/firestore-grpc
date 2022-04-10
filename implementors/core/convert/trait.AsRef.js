(function() {var implementors = {};
implementors["anyhow"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static&gt; for <a class=\"struct\" href=\"anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>","synthetic":false,"types":["anyhow::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> + 'static&gt; for <a class=\"struct\" href=\"anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>","synthetic":false,"types":["anyhow::Error"]}];
implementors["bytes"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"bytes/struct.Bytes.html\" title=\"struct bytes::Bytes\">Bytes</a>","synthetic":false,"types":["bytes::bytes::Bytes"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"bytes/struct.BytesMut.html\" title=\"struct bytes::BytesMut\">BytesMut</a>","synthetic":false,"types":["bytes::bytes_mut::BytesMut"]}];
implementors["either"] = [{"text":"impl&lt;L, R, Target&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;Target&gt; for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;Target&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;Target&gt;,&nbsp;</span>","synthetic":false,"types":["either::Either"]},{"text":"impl&lt;L, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.str.html\">str</a>&gt; for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.str.html\">str</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.str.html\">str</a>&gt;,&nbsp;</span>","synthetic":false,"types":["either::Either"]},{"text":"impl&lt;L, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.60.0/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt; for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.60.0/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.60.0/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt;,&nbsp;</span>","synthetic":false,"types":["either::Either"]},{"text":"impl&lt;L, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.60.0/std/ffi/os_str/struct.OsStr.html\" title=\"struct std::ffi::os_str::OsStr\">OsStr</a>&gt; for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.60.0/std/ffi/os_str/struct.OsStr.html\" title=\"struct std::ffi::os_str::OsStr\">OsStr</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.60.0/std/ffi/os_str/struct.OsStr.html\" title=\"struct std::ffi::os_str::OsStr\">OsStr</a>&gt;,&nbsp;</span>","synthetic":false,"types":["either::Either"]},{"text":"impl&lt;L, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.60.0/std/ffi/c_str/struct.CStr.html\" title=\"struct std::ffi::c_str::CStr\">CStr</a>&gt; for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.60.0/std/ffi/c_str/struct.CStr.html\" title=\"struct std::ffi::c_str::CStr\">CStr</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.60.0/std/ffi/c_str/struct.CStr.html\" title=\"struct std::ffi::c_str::CStr\">CStr</a>&gt;,&nbsp;</span>","synthetic":false,"types":["either::Either"]},{"text":"impl&lt;L, R, Target&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.slice.html\">[</a>Target<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.slice.html\">]</a>&gt; for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.slice.html\">[</a>Target<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.slice.html\">]</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.slice.html\">[</a>Target<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.slice.html\">]</a>&gt;,&nbsp;</span>","synthetic":false,"types":["either::Either"]}];
implementors["h2"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"h2/ext/struct.Protocol.html\" title=\"struct h2::ext::Protocol\">Protocol</a>","synthetic":false,"types":["h2::ext::Protocol"]}];
implementors["http"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"http/header/struct.HeaderName.html\" title=\"struct http::header::HeaderName\">HeaderName</a>","synthetic":false,"types":["http::header::name::HeaderName"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"http/header/struct.HeaderName.html\" title=\"struct http::header::HeaderName\">HeaderName</a>","synthetic":false,"types":["http::header::name::HeaderName"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"http/header/struct.HeaderValue.html\" title=\"struct http::header::HeaderValue\">HeaderValue</a>","synthetic":false,"types":["http::header::value::HeaderValue"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"http/method/struct.Method.html\" title=\"struct http::method::Method\">Method</a>","synthetic":false,"types":["http::method::Method"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"http/uri/struct.Authority.html\" title=\"struct http::uri::Authority\">Authority</a>","synthetic":false,"types":["http::uri::authority::Authority"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"http/uri/struct.Port.html\" title=\"struct http::uri::Port\">Port</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.str.html\">str</a>&gt;,&nbsp;</span>","synthetic":false,"types":["http::uri::port::Port"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"http/uri/struct.Scheme.html\" title=\"struct http::uri::Scheme\">Scheme</a>","synthetic":false,"types":["http::uri::scheme::Scheme"]}];
implementors["hyper"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"hyper/ext/struct.Protocol.html\" title=\"struct hyper::ext::Protocol\">Protocol</a>","synthetic":false,"types":["hyper::ext::Protocol"]}];
implementors["ring"] = [{"text":"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"ring/aead/struct.Aad.html\" title=\"struct ring::aead::Aad\">Aad</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.slice.html\">]</a>&gt;,&nbsp;</span>","synthetic":false,"types":["ring::aead::Aad"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"ring/aead/struct.Tag.html\" title=\"struct ring::aead::Tag\">Tag</a>","synthetic":false,"types":["ring::aead::Tag"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.array.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.array.html\">; 12]</a>&gt; for <a class=\"struct\" href=\"ring/aead/struct.Nonce.html\" title=\"struct ring::aead::Nonce\">Nonce</a>","synthetic":false,"types":["ring::aead::nonce::Nonce"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"ring/agreement/struct.PublicKey.html\" title=\"struct ring::agreement::PublicKey\">PublicKey</a>","synthetic":false,"types":["ring::agreement::PublicKey"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"ring/digest/struct.Digest.html\" title=\"struct ring::digest::Digest\">Digest</a>","synthetic":false,"types":["ring::digest::Digest"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"ring/hmac/struct.Tag.html\" title=\"struct ring::hmac::Tag\">Tag</a>","synthetic":false,"types":["ring::hmac::Tag"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"ring/pkcs8/struct.Document.html\" title=\"struct ring::pkcs8::Document\">Document</a>","synthetic":false,"types":["ring::pkcs8::Document"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"ring/signature/struct.RsaSubjectPublicKey.html\" title=\"struct ring::signature::RsaSubjectPublicKey\">RsaSubjectPublicKey</a>","synthetic":false,"types":["ring::rsa::signing::RsaSubjectPublicKey"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"ring/signature/struct.Signature.html\" title=\"struct ring::signature::Signature\">Signature</a>","synthetic":false,"types":["ring::signature::Signature"]}];
implementors["rustls"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"rustls/struct.Certificate.html\" title=\"struct rustls::Certificate\">Certificate</a>","synthetic":false,"types":["rustls::key::Certificate"]}];
implementors["tokio"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"tokio/net/struct.TcpStream.html\" title=\"struct tokio::net::TcpStream\">TcpStream</a>&gt; for <a class=\"struct\" href=\"tokio/net/tcp/struct.ReadHalf.html\" title=\"struct tokio::net::tcp::ReadHalf\">ReadHalf</a>&lt;'_&gt;","synthetic":false,"types":["tokio::net::tcp::split::ReadHalf"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"tokio/net/struct.TcpStream.html\" title=\"struct tokio::net::TcpStream\">TcpStream</a>&gt; for <a class=\"struct\" href=\"tokio/net/tcp/struct.WriteHalf.html\" title=\"struct tokio::net::tcp::WriteHalf\">WriteHalf</a>&lt;'_&gt;","synthetic":false,"types":["tokio::net::tcp::split::WriteHalf"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"tokio/net/struct.TcpStream.html\" title=\"struct tokio::net::TcpStream\">TcpStream</a>&gt; for <a class=\"struct\" href=\"tokio/net/tcp/struct.OwnedReadHalf.html\" title=\"struct tokio::net::tcp::OwnedReadHalf\">OwnedReadHalf</a>","synthetic":false,"types":["tokio::net::tcp::split_owned::OwnedReadHalf"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"tokio/net/struct.TcpStream.html\" title=\"struct tokio::net::TcpStream\">TcpStream</a>&gt; for <a class=\"struct\" href=\"tokio/net/tcp/struct.OwnedWriteHalf.html\" title=\"struct tokio::net::tcp::OwnedWriteHalf\">OwnedWriteHalf</a>","synthetic":false,"types":["tokio::net::tcp::split_owned::OwnedWriteHalf"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"tokio/net/struct.UnixStream.html\" title=\"struct tokio::net::UnixStream\">UnixStream</a>&gt; for <a class=\"struct\" href=\"tokio/net/unix/struct.ReadHalf.html\" title=\"struct tokio::net::unix::ReadHalf\">ReadHalf</a>&lt;'_&gt;","synthetic":false,"types":["tokio::net::unix::split::ReadHalf"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"tokio/net/struct.UnixStream.html\" title=\"struct tokio::net::UnixStream\">UnixStream</a>&gt; for <a class=\"struct\" href=\"tokio/net/unix/struct.WriteHalf.html\" title=\"struct tokio::net::unix::WriteHalf\">WriteHalf</a>&lt;'_&gt;","synthetic":false,"types":["tokio::net::unix::split::WriteHalf"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"tokio/net/struct.UnixStream.html\" title=\"struct tokio::net::UnixStream\">UnixStream</a>&gt; for <a class=\"struct\" href=\"tokio/net/unix/struct.OwnedReadHalf.html\" title=\"struct tokio::net::unix::OwnedReadHalf\">OwnedReadHalf</a>","synthetic":false,"types":["tokio::net::unix::split_owned::OwnedReadHalf"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"tokio/net/struct.UnixStream.html\" title=\"struct tokio::net::UnixStream\">UnixStream</a>&gt; for <a class=\"struct\" href=\"tokio/net/unix/struct.OwnedWriteHalf.html\" title=\"struct tokio::net::unix::OwnedWriteHalf\">OwnedWriteHalf</a>","synthetic":false,"types":["tokio::net::unix::split_owned::OwnedWriteHalf"]}];
implementors["tokio_stream"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"tokio/sync/mpsc/bounded/struct.Receiver.html\" title=\"struct tokio::sync::mpsc::bounded::Receiver\">Receiver</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"tokio_stream/wrappers/struct.ReceiverStream.html\" title=\"struct tokio_stream::wrappers::ReceiverStream\">ReceiverStream</a>&lt;T&gt;","synthetic":false,"types":["tokio_stream::wrappers::mpsc_bounded::ReceiverStream"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"tokio/sync/mpsc/unbounded/struct.UnboundedReceiver.html\" title=\"struct tokio::sync::mpsc::unbounded::UnboundedReceiver\">UnboundedReceiver</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"tokio_stream/wrappers/struct.UnboundedReceiverStream.html\" title=\"struct tokio_stream::wrappers::UnboundedReceiverStream\">UnboundedReceiverStream</a>&lt;T&gt;","synthetic":false,"types":["tokio_stream::wrappers::mpsc_unbounded::UnboundedReceiverStream"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"tokio/time/interval/struct.Interval.html\" title=\"struct tokio::time::interval::Interval\">Interval</a>&gt; for <a class=\"struct\" href=\"tokio_stream/wrappers/struct.IntervalStream.html\" title=\"struct tokio_stream::wrappers::IntervalStream\">IntervalStream</a>","synthetic":false,"types":["tokio_stream::wrappers::interval::IntervalStream"]}];
implementors["tokio_util"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"tokio/sync/semaphore/struct.Semaphore.html\" title=\"struct tokio::sync::semaphore::Semaphore\">Semaphore</a>&gt; for <a class=\"struct\" href=\"tokio_util/sync/struct.PollSemaphore.html\" title=\"struct tokio_util::sync::PollSemaphore\">PollSemaphore</a>","synthetic":false,"types":["tokio_util::sync::poll_semaphore::PollSemaphore"]}];
implementors["tonic"] = [{"text":"impl&lt;VE:&nbsp;ValueEncoding&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"tonic/metadata/struct.MetadataKey.html\" title=\"struct tonic::metadata::MetadataKey\">MetadataKey</a>&lt;VE&gt;","synthetic":false,"types":["tonic::metadata::key::MetadataKey"]},{"text":"impl&lt;VE:&nbsp;ValueEncoding&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"tonic/metadata/struct.MetadataKey.html\" title=\"struct tonic::metadata::MetadataKey\">MetadataKey</a>&lt;VE&gt;","synthetic":false,"types":["tonic::metadata::key::MetadataKey"]},{"text":"impl&lt;VE:&nbsp;ValueEncoding&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"tonic/metadata/struct.MetadataValue.html\" title=\"struct tonic::metadata::MetadataValue\">MetadataValue</a>&lt;VE&gt;","synthetic":false,"types":["tonic::metadata::value::MetadataValue"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"tonic/transport/struct.Certificate.html\" title=\"struct tonic::transport::Certificate\">Certificate</a>","synthetic":false,"types":["tonic::transport::tls::Certificate"]}];
implementors["tracing_core"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"tracing_core/struct.Field.html\" title=\"struct tracing_core::Field\">Field</a>","synthetic":false,"types":["tracing_core::field::Field"]}];
implementors["webpki"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"webpki/struct.DNSName.html\" title=\"struct webpki::DNSName\">DNSName</a>","synthetic":false,"types":["webpki::name::DNSName"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()