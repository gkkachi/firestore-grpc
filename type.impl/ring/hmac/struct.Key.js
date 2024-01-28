(function() {var type_impls = {
"ring":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Key\" class=\"impl\"><a class=\"src rightside\" href=\"src/ring/hmac.rs.html#180-269\">source</a><a href=\"#impl-Key\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"ring/hmac/struct.Key.html\" title=\"struct ring::hmac::Key\">Key</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.generate\" class=\"method\"><a class=\"src rightside\" href=\"src/ring/hmac.rs.html#188-193\">source</a><h4 class=\"code-header\">pub fn <a href=\"ring/hmac/struct.Key.html#tymethod.generate\" class=\"fn\">generate</a>(\n    algorithm: <a class=\"struct\" href=\"ring/hmac/struct.Algorithm.html\" title=\"struct ring::hmac::Algorithm\">Algorithm</a>,\n    rng: &amp;dyn <a class=\"trait\" href=\"ring/rand/trait.SecureRandom.html\" title=\"trait ring::rand::SecureRandom\">SecureRandom</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, <a class=\"struct\" href=\"ring/error/struct.Unspecified.html\" title=\"struct ring::error::Unspecified\">Unspecified</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Generate an HMAC signing key using the given digest algorithm with a\nrandom value generated from <code>rng</code>.</p>\n<p>The key will be <code>digest_alg.output_len</code> bytes long, based on the\nrecommendation in <a href=\"https://tools.ietf.org/html/rfc2104#section-3\">RFC 2104 Section 3</a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/ring/hmac.rs.html#224-262\">source</a><h4 class=\"code-header\">pub fn <a href=\"ring/hmac/struct.Key.html#tymethod.new\" class=\"fn\">new</a>(algorithm: <a class=\"struct\" href=\"ring/hmac/struct.Algorithm.html\" title=\"struct ring::hmac::Algorithm\">Algorithm</a>, key_value: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Construct an HMAC signing key using the given digest algorithm and key\nvalue.</p>\n<p><code>key_value</code> should be a value generated using a secure random number\ngenerator (e.g. the <code>key_value</code> output by\n<code>SealingKey::generate_serializable()</code>) or derived from a random key by\na key derivation function (e.g. <code>ring::hkdf</code>). In particular,\n<code>key_value</code> shouldn’t be a password.</p>\n<p>As specified in RFC 2104, if <code>key_value</code> is shorter than the digest\nalgorithm’s block length (as returned by <code>digest::Algorithm::block_len</code>,\nnot the digest length returned by <code>digest::Algorithm::output_len</code>) then\nit will be padded with zeros. Similarly, if it is longer than the block\nlength then it will be compressed using the digest algorithm.</p>\n<p>You should not use keys larger than the <code>digest_alg.block_len</code> because\nthe truncation described above reduces their strength to only\n<code>digest_alg.output_len * 8</code> bits. Support for such keys is likely to be\nremoved in a future version of <em>ring</em>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.algorithm\" class=\"method\"><a class=\"src rightside\" href=\"src/ring/hmac.rs.html#266-268\">source</a><h4 class=\"code-header\">pub fn <a href=\"ring/hmac/struct.Key.html#tymethod.algorithm\" class=\"fn\">algorithm</a>(&amp;self) -&gt; <a class=\"struct\" href=\"ring/hmac/struct.Algorithm.html\" title=\"struct ring::hmac::Algorithm\">Algorithm</a></h4></section></summary><div class=\"docblock\"><p>The digest algorithm for the key.</p>\n</div></details></div></details>",0,"ring::hmac::SigningKey","ring::hmac::VerificationKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Key\" class=\"impl\"><a class=\"src rightside\" href=\"src/ring/hmac.rs.html#172-178\">source</a><a href=\"#impl-Debug-for-Key\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"ring/hmac/struct.Key.html\" title=\"struct ring::hmac::Key\">Key</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/ring/hmac.rs.html#173-177\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","ring::hmac::SigningKey","ring::hmac::VerificationKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3COkm%3C'_,+Algorithm%3E%3E-for-Key\" class=\"impl\"><a class=\"src rightside\" href=\"src/ring/hmac.rs.html#277-281\">source</a><a href=\"#impl-From%3COkm%3C'_,+Algorithm%3E%3E-for-Key\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"ring/hkdf/struct.Okm.html\" title=\"struct ring::hkdf::Okm\">Okm</a>&lt;'_, <a class=\"struct\" href=\"ring/hmac/struct.Algorithm.html\" title=\"struct ring::hmac::Algorithm\">Algorithm</a>&gt;&gt; for <a class=\"struct\" href=\"ring/hmac/struct.Key.html\" title=\"struct ring::hmac::Key\">Key</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/ring/hmac.rs.html#278-280\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(okm: <a class=\"struct\" href=\"ring/hkdf/struct.Okm.html\" title=\"struct ring::hkdf::Okm\">Okm</a>&lt;'_, <a class=\"struct\" href=\"ring/hmac/struct.Algorithm.html\" title=\"struct ring::hmac::Algorithm\">Algorithm</a>&gt;) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<Okm<'_, Algorithm>>","ring::hmac::SigningKey","ring::hmac::VerificationKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Key\" class=\"impl\"><a class=\"src rightside\" href=\"src/ring/hmac.rs.html#156\">source</a><a href=\"#impl-Clone-for-Key\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"ring/hmac/struct.Key.html\" title=\"struct ring::hmac::Key\">Key</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/ring/hmac.rs.html#156\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"ring/hmac/struct.Key.html\" title=\"struct ring::hmac::Key\">Key</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","ring::hmac::SigningKey","ring::hmac::VerificationKey"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()