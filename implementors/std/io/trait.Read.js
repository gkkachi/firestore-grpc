(function() {var implementors = {};
implementors["base64"] = [{"text":"impl&lt;'a, R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"base64/read/struct.DecoderReader.html\" title=\"struct base64::read::DecoderReader\">DecoderReader</a>&lt;'a, R&gt;","synthetic":false,"types":["base64::read::decoder::DecoderReader"]}];
implementors["bytes"] = [{"text":"impl&lt;B:&nbsp;<a class=\"trait\" href=\"bytes/buf/trait.Buf.html\" title=\"trait bytes::buf::Buf\">Buf</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"bytes/buf/struct.Reader.html\" title=\"struct bytes::buf::Reader\">Reader</a>&lt;B&gt;","synthetic":false,"types":["bytes::buf::reader::Reader"]}];
implementors["either"] = [{"text":"impl&lt;L, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,&nbsp;</span>","synthetic":false,"types":["either::Either"]}];
implementors["mio"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"mio/unix/pipe/struct.Receiver.html\" title=\"struct mio::unix::pipe::Receiver\">Receiver</a>","synthetic":false,"types":["mio::sys::unix::pipe::Receiver"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for &amp;<a class=\"struct\" href=\"mio/unix/pipe/struct.Receiver.html\" title=\"struct mio::unix::pipe::Receiver\">Receiver</a>","synthetic":false,"types":["mio::sys::unix::pipe::Receiver"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"mio/net/struct.TcpStream.html\" title=\"struct mio::net::TcpStream\">TcpStream</a>","synthetic":false,"types":["mio::net::tcp::stream::TcpStream"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for &amp;'a <a class=\"struct\" href=\"mio/net/struct.TcpStream.html\" title=\"struct mio::net::TcpStream\">TcpStream</a>","synthetic":false,"types":["mio::net::tcp::stream::TcpStream"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"mio/net/struct.UnixStream.html\" title=\"struct mio::net::UnixStream\">UnixStream</a>","synthetic":false,"types":["mio::net::uds::stream::UnixStream"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for &amp;'a <a class=\"struct\" href=\"mio/net/struct.UnixStream.html\" title=\"struct mio::net::UnixStream\">UnixStream</a>","synthetic":false,"types":["mio::net::uds::stream::UnixStream"]}];
implementors["rand_core"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for dyn <a class=\"trait\" href=\"rand_core/trait.RngCore.html\" title=\"trait rand_core::RngCore\">RngCore</a>","synthetic":false,"types":[]}];
implementors["rustls"] = [{"text":"impl&lt;'a, S, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"rustls/struct.Stream.html\" title=\"struct rustls::Stream\">Stream</a>&lt;'a, S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: 'a + <a class=\"trait\" href=\"rustls/trait.Session.html\" title=\"trait rustls::Session\">Session</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: 'a + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,&nbsp;</span>","synthetic":false,"types":["rustls::stream::Stream"]},{"text":"impl&lt;S, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"rustls/struct.StreamOwned.html\" title=\"struct rustls::StreamOwned\">StreamOwned</a>&lt;S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"rustls/trait.Session.html\" title=\"trait rustls::Session\">Session</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,&nbsp;</span>","synthetic":false,"types":["rustls::stream::StreamOwned"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"rustls/struct.ClientSession.html\" title=\"struct rustls::ClientSession\">ClientSession</a>","synthetic":false,"types":["rustls::client::ClientSession"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"rustls/struct.ServerSession.html\" title=\"struct rustls::ServerSession\">ServerSession</a>","synthetic":false,"types":["rustls::server::ServerSession"]}];
implementors["socket2"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"socket2/struct.Socket.html\" title=\"struct socket2::Socket\">Socket</a>","synthetic":false,"types":["socket2::socket::Socket"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for &amp;'a <a class=\"struct\" href=\"socket2/struct.Socket.html\" title=\"struct socket2::Socket\">Socket</a>","synthetic":false,"types":["socket2::socket::Socket"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()