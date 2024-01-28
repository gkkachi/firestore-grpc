(function() {var type_impls = {
"rustls":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Codec-for-Vec%3CPayloadU16%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustls/msgs/handshake.rs.html#55\">source</a><a href=\"#impl-Codec-for-Vec%3CPayloadU16%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"rustls/internal/msgs/codec/trait.Codec.html\" title=\"trait rustls::internal::msgs::codec::Codec\">Codec</a> for <a class=\"type\" href=\"rustls/internal/msgs/handshake/type.VecU16OfPayloadU16.html\" title=\"type rustls::internal::msgs::handshake::VecU16OfPayloadU16\">VecU16OfPayloadU16</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustls/msgs/handshake.rs.html#55\">source</a><a href=\"#method.encode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustls/internal/msgs/codec/trait.Codec.html#tymethod.encode\" class=\"fn\">encode</a>(&amp;self, bytes: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt;)</h4></section></summary><div class='docblock'>Encode yourself by appending onto <code>bytes</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.read\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustls/msgs/handshake.rs.html#55\">source</a><a href=\"#method.read\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustls/internal/msgs/codec/trait.Codec.html#tymethod.read\" class=\"fn\">read</a>(r: &amp;mut <a class=\"struct\" href=\"rustls/internal/msgs/codec/struct.Reader.html\" title=\"struct rustls::internal::msgs::codec::Reader\">Reader</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"type\" href=\"rustls/internal/msgs/handshake/type.VecU16OfPayloadU16.html\" title=\"type rustls::internal::msgs::handshake::VecU16OfPayloadU16\">VecU16OfPayloadU16</a>&gt;</h4></section></summary><div class='docblock'>Decode yourself by fiddling with the <code>Reader</code>.\nReturn Some if it worked, None if not.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_encoding\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustls/msgs/codec.rs.html#60-64\">source</a><a href=\"#method.get_encoding\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustls/internal/msgs/codec/trait.Codec.html#method.get_encoding\" class=\"fn\">get_encoding</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"Vec&lt;u8&gt;\">ⓘ</a></h4></section></summary><div class='docblock'>Convenience function to get the results of <code>encode()</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.read_bytes\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustls/msgs/codec.rs.html#68-71\">source</a><a href=\"#method.read_bytes\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustls/internal/msgs/codec/trait.Codec.html#method.read_bytes\" class=\"fn\">read_bytes</a>(bytes: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Self&gt;</h4></section></summary><div class='docblock'>Read one of these from the front of <code>bytes</code> and\nreturn it.</div></details></div></details>","Codec","rustls::msgs::handshake::SCTList","rustls::msgs::handshake::DistinguishedNames"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()