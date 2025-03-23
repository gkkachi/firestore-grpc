(function() {
    var implementors = Object.fromEntries([["base64",[["impl&lt;'a, R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"base64/read/struct.DecoderReader.html\" title=\"struct base64::read::DecoderReader\">DecoderReader</a>&lt;'a, R&gt;"]]],["bytes",[["impl&lt;B: <a class=\"trait\" href=\"bytes/buf/trait.Buf.html\" title=\"trait bytes::buf::Buf\">Buf</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"bytes/buf/struct.Reader.html\" title=\"struct bytes::buf::Reader\">Reader</a>&lt;B&gt;"]]],["either",[["impl&lt;L, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt;<div class=\"where\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,</div>"]]],["mio",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for &amp;<a class=\"struct\" href=\"mio/unix/pipe/struct.Receiver.html\" title=\"struct mio::unix::pipe::Receiver\">Receiver</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"mio/net/struct.TcpStream.html\" title=\"struct mio::net::TcpStream\">TcpStream</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"mio/net/struct.UnixStream.html\" title=\"struct mio::net::UnixStream\">UnixStream</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"mio/unix/pipe/struct.Receiver.html\" title=\"struct mio::unix::pipe::Receiver\">Receiver</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for &amp;'a <a class=\"struct\" href=\"mio/net/struct.TcpStream.html\" title=\"struct mio::net::TcpStream\">TcpStream</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for &amp;'a <a class=\"struct\" href=\"mio/net/struct.UnixStream.html\" title=\"struct mio::net::UnixStream\">UnixStream</a>"]]],["rand_core",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for dyn <a class=\"trait\" href=\"rand_core/trait.RngCore.html\" title=\"trait rand_core::RngCore\">RngCore</a>"]]],["rustls",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"rustls/struct.ClientSession.html\" title=\"struct rustls::ClientSession\">ClientSession</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"rustls/struct.ServerSession.html\" title=\"struct rustls::ServerSession\">ServerSession</a>"],["impl&lt;'a, S, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"rustls/struct.Stream.html\" title=\"struct rustls::Stream\">Stream</a>&lt;'a, S, T&gt;<div class=\"where\">where\n    S: 'a + <a class=\"trait\" href=\"rustls/trait.Session.html\" title=\"trait rustls::Session\">Session</a>,\n    T: 'a + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,</div>"],["impl&lt;S, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"rustls/struct.StreamOwned.html\" title=\"struct rustls::StreamOwned\">StreamOwned</a>&lt;S, T&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"rustls/trait.Session.html\" title=\"trait rustls::Session\">Session</a>,\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,</div>"]]],["socket2",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"socket2/struct.Socket.html\" title=\"struct socket2::Socket\">Socket</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for &amp;'a <a class=\"struct\" href=\"socket2/struct.Socket.html\" title=\"struct socket2::Socket\">Socket</a>"]]]]);
    if (window.register_implementors) {
        window.register_implementors(implementors);
    } else {
        window.pending_implementors = implementors;
    }
})()
//{"start":57,"fragment_lengths":[428,503,561,1553,260,1870,504]}