(function() {var type_impls = {
"rand_chacha":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ChaCha20Rng\" class=\"impl\"><a class=\"src rightside\" href=\"src/rand_chacha/chacha.rs.html#343\">source</a><a href=\"#impl-ChaCha20Rng\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"rand_chacha/struct.ChaCha20Rng.html\" title=\"struct rand_chacha::ChaCha20Rng\">ChaCha20Rng</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_word_pos\" class=\"method\"><a class=\"src rightside\" href=\"src/rand_chacha/chacha.rs.html#343\">source</a><h4 class=\"code-header\">pub fn <a href=\"rand_chacha/struct.ChaCha20Rng.html#tymethod.get_word_pos\" class=\"fn\">get_word_pos</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.u128.html\">u128</a></h4></section></summary><div class=\"docblock\"><p>Get the offset from the start of the stream, in 32-bit words.</p>\n<p>Since the generated blocks are 16 words (2<sup>4</sup>) long and the\ncounter is 64-bits, the offset is a 68-bit number. Sub-word offsets are\nnot supported, hence the result can simply be multiplied by 4 to get a\nbyte-offset.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_word_pos\" class=\"method\"><a class=\"src rightside\" href=\"src/rand_chacha/chacha.rs.html#343\">source</a><h4 class=\"code-header\">pub fn <a href=\"rand_chacha/struct.ChaCha20Rng.html#tymethod.set_word_pos\" class=\"fn\">set_word_pos</a>(&amp;mut self, word_offset: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.u128.html\">u128</a>)</h4></section></summary><div class=\"docblock\"><p>Set the offset from the start of the stream, in 32-bit words.</p>\n<p>As with <code>get_word_pos</code>, we use a 68-bit number. Since the generator\nsimply cycles at the end of its period (1 ZiB), we ignore the upper\n60 bits.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_stream\" class=\"method\"><a class=\"src rightside\" href=\"src/rand_chacha/chacha.rs.html#343\">source</a><h4 class=\"code-header\">pub fn <a href=\"rand_chacha/struct.ChaCha20Rng.html#tymethod.set_stream\" class=\"fn\">set_stream</a>(&amp;mut self, stream: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.u64.html\">u64</a>)</h4></section></summary><div class=\"docblock\"><p>Set the stream number.</p>\n<p>This is initialized to zero; 2<sup>64</sup> unique streams of output\nare available per seed/key.</p>\n<p>Note that in order to reproduce ChaCha output with a specific 64-bit\nnonce, one can convert that nonce to a <code>u64</code> in little-endian fashion\nand pass to this function. In theory a 96-bit nonce can be used by\npassing the last 64-bits to this function and using the first 32-bits as\nthe most significant half of the 64-bit counter (which may be set\nindirectly via <code>set_word_pos</code>), but this is not directly supported.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_stream\" class=\"method\"><a class=\"src rightside\" href=\"src/rand_chacha/chacha.rs.html#343\">source</a><h4 class=\"code-header\">pub fn <a href=\"rand_chacha/struct.ChaCha20Rng.html#tymethod.get_stream\" class=\"fn\">get_stream</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.u64.html\">u64</a></h4></section></summary><div class=\"docblock\"><p>Get the stream number.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_seed\" class=\"method\"><a class=\"src rightside\" href=\"src/rand_chacha/chacha.rs.html#343\">source</a><h4 class=\"code-header\">pub fn <a href=\"rand_chacha/struct.ChaCha20Rng.html#tymethod.get_seed\" class=\"fn\">get_seed</a>(&amp;self) -&gt; [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.array.html\">32</a>]</h4></section></summary><div class=\"docblock\"><p>Get the seed.</p>\n</div></details></div></details>",0,"rand_chacha::ChaChaRng"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-ChaCha20Rng\" class=\"impl\"><a class=\"src rightside\" href=\"src/rand_chacha/chacha.rs.html#343\">source</a><a href=\"#impl-Clone-for-ChaCha20Rng\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"rand_chacha/struct.ChaCha20Rng.html\" title=\"struct rand_chacha::ChaCha20Rng\">ChaCha20Rng</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rand_chacha/chacha.rs.html#343\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.1/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"rand_chacha/struct.ChaCha20Rng.html\" title=\"struct rand_chacha::ChaCha20Rng\">ChaCha20Rng</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.80.1/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.80.1/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.1/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.80.1/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","rand_chacha::ChaChaRng"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-ChaCha20Rng\" class=\"impl\"><a class=\"src rightside\" href=\"src/rand_chacha/chacha.rs.html#343\">source</a><a href=\"#impl-Debug-for-ChaCha20Rng\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"rand_chacha/struct.ChaCha20Rng.html\" title=\"struct rand_chacha::ChaCha20Rng\">ChaCha20Rng</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rand_chacha/chacha.rs.html#343\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.1/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.80.1/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.80.1/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.80.1/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","rand_chacha::ChaChaRng"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CChaCha20Core%3E-for-ChaCha20Rng\" class=\"impl\"><a class=\"src rightside\" href=\"src/rand_chacha/chacha.rs.html#343\">source</a><a href=\"#impl-From%3CChaCha20Core%3E-for-ChaCha20Rng\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"rand_chacha/struct.ChaCha20Core.html\" title=\"struct rand_chacha::ChaCha20Core\">ChaCha20Core</a>&gt; for <a class=\"struct\" href=\"rand_chacha/struct.ChaCha20Rng.html\" title=\"struct rand_chacha::ChaCha20Rng\">ChaCha20Rng</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rand_chacha/chacha.rs.html#343\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.1/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(core: <a class=\"struct\" href=\"rand_chacha/struct.ChaCha20Core.html\" title=\"struct rand_chacha::ChaCha20Core\">ChaCha20Core</a>) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<ChaCha20Core>","rand_chacha::ChaChaRng"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-ChaCha20Rng\" class=\"impl\"><a class=\"src rightside\" href=\"src/rand_chacha/chacha.rs.html#343\">source</a><a href=\"#impl-PartialEq-for-ChaCha20Rng\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"rand_chacha/struct.ChaCha20Rng.html\" title=\"struct rand_chacha::ChaCha20Rng\">ChaCha20Rng</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rand_chacha/chacha.rs.html#343\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.1/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, rhs: &amp;<a class=\"struct\" href=\"rand_chacha/struct.ChaCha20Rng.html\" title=\"struct rand_chacha::ChaCha20Rng\">ChaCha20Rng</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.80.1/src/core/cmp.rs.html#263\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.1/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","rand_chacha::ChaChaRng"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RngCore-for-ChaCha20Rng\" class=\"impl\"><a class=\"src rightside\" href=\"src/rand_chacha/chacha.rs.html#343\">source</a><a href=\"#impl-RngCore-for-ChaCha20Rng\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"rand_core/trait.RngCore.html\" title=\"trait rand_core::RngCore\">RngCore</a> for <a class=\"struct\" href=\"rand_chacha/struct.ChaCha20Rng.html\" title=\"struct rand_chacha::ChaCha20Rng\">ChaCha20Rng</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.next_u32\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rand_chacha/chacha.rs.html#343\">source</a><a href=\"#method.next_u32\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rand_core/trait.RngCore.html#tymethod.next_u32\" class=\"fn\">next_u32</a>(&amp;mut self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.u32.html\">u32</a></h4></section></summary><div class='docblock'>Return the next random <code>u32</code>. <a href=\"rand_core/trait.RngCore.html#tymethod.next_u32\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.next_u64\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rand_chacha/chacha.rs.html#343\">source</a><a href=\"#method.next_u64\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rand_core/trait.RngCore.html#tymethod.next_u64\" class=\"fn\">next_u64</a>(&amp;mut self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.u64.html\">u64</a></h4></section></summary><div class='docblock'>Return the next random <code>u64</code>. <a href=\"rand_core/trait.RngCore.html#tymethod.next_u64\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.fill_bytes\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rand_chacha/chacha.rs.html#343\">source</a><a href=\"#method.fill_bytes\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rand_core/trait.RngCore.html#tymethod.fill_bytes\" class=\"fn\">fill_bytes</a>(&amp;mut self, bytes: &amp;mut [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.u8.html\">u8</a>])</h4></section></summary><div class='docblock'>Fill <code>dest</code> with random data. <a href=\"rand_core/trait.RngCore.html#tymethod.fill_bytes\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_fill_bytes\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rand_chacha/chacha.rs.html#343\">source</a><a href=\"#method.try_fill_bytes\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rand_core/trait.RngCore.html#tymethod.try_fill_bytes\" class=\"fn\">try_fill_bytes</a>(&amp;mut self, bytes: &amp;mut [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.u8.html\">u8</a>]) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"rand_core/error/struct.Error.html\" title=\"struct rand_core::error::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Fill <code>dest</code> entirely with random data. <a href=\"rand_core/trait.RngCore.html#tymethod.try_fill_bytes\">Read more</a></div></details></div></details>","RngCore","rand_chacha::ChaChaRng"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SeedableRng-for-ChaCha20Rng\" class=\"impl\"><a class=\"src rightside\" href=\"src/rand_chacha/chacha.rs.html#343\">source</a><a href=\"#impl-SeedableRng-for-ChaCha20Rng\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"rand_core/trait.SeedableRng.html\" title=\"trait rand_core::SeedableRng\">SeedableRng</a> for <a class=\"struct\" href=\"rand_chacha/struct.ChaCha20Rng.html\" title=\"struct rand_chacha::ChaCha20Rng\">ChaCha20Rng</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Seed\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Seed\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"rand_core/trait.SeedableRng.html#associatedtype.Seed\" class=\"associatedtype\">Seed</a> = [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.array.html\">32</a>]</h4></section></summary><div class='docblock'>Seed type, which is restricted to types mutably-dereferenceable as <code>u8</code>\narrays (we recommend <code>[u8; N]</code> for some <code>N</code>). <a href=\"rand_core/trait.SeedableRng.html#associatedtype.Seed\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_seed\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rand_chacha/chacha.rs.html#343\">source</a><a href=\"#method.from_seed\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rand_core/trait.SeedableRng.html#tymethod.from_seed\" class=\"fn\">from_seed</a>(seed: Self::<a class=\"associatedtype\" href=\"rand_core/trait.SeedableRng.html#associatedtype.Seed\" title=\"type rand_core::SeedableRng::Seed\">Seed</a>) -&gt; Self</h4></section></summary><div class='docblock'>Create a new PRNG using the given seed. <a href=\"rand_core/trait.SeedableRng.html#tymethod.from_seed\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.seed_from_u64\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rand_core/lib.rs.html#335\">source</a><a href=\"#method.seed_from_u64\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rand_core/trait.SeedableRng.html#method.seed_from_u64\" class=\"fn\">seed_from_u64</a>(state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.u64.html\">u64</a>) -&gt; Self</h4></section></summary><div class='docblock'>Create a new PRNG using a <code>u64</code> seed. <a href=\"rand_core/trait.SeedableRng.html#method.seed_from_u64\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_rng\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rand_core/lib.rs.html#390\">source</a><a href=\"#method.from_rng\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rand_core/trait.SeedableRng.html#method.from_rng\" class=\"fn\">from_rng</a>&lt;R&gt;(rng: R) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, <a class=\"struct\" href=\"rand_core/error/struct.Error.html\" title=\"struct rand_core::error::Error\">Error</a>&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"rand_core/trait.RngCore.html\" title=\"trait rand_core::RngCore\">RngCore</a>,</div></h4></section></summary><div class='docblock'>Create a new PRNG seeded from another <code>Rng</code>. <a href=\"rand_core/trait.SeedableRng.html#method.from_rng\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_entropy\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rand_core/lib.rs.html#412\">source</a><a href=\"#method.from_entropy\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rand_core/trait.SeedableRng.html#method.from_entropy\" class=\"fn\">from_entropy</a>() -&gt; Self</h4></section></summary><div class='docblock'>Creates a new instance of the RNG seeded via <a href=\"https://docs.rs/getrandom\"><code>getrandom</code></a>. <a href=\"rand_core/trait.SeedableRng.html#method.from_entropy\">Read more</a></div></details></div></details>","SeedableRng","rand_chacha::ChaChaRng"],["<section id=\"impl-CryptoRng-for-ChaCha20Rng\" class=\"impl\"><a class=\"src rightside\" href=\"src/rand_chacha/chacha.rs.html#343\">source</a><a href=\"#impl-CryptoRng-for-ChaCha20Rng\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"rand_core/trait.CryptoRng.html\" title=\"trait rand_core::CryptoRng\">CryptoRng</a> for <a class=\"struct\" href=\"rand_chacha/struct.ChaCha20Rng.html\" title=\"struct rand_chacha::ChaCha20Rng\">ChaCha20Rng</a></h3></section>","CryptoRng","rand_chacha::ChaChaRng"],["<section id=\"impl-Eq-for-ChaCha20Rng\" class=\"impl\"><a class=\"src rightside\" href=\"src/rand_chacha/chacha.rs.html#343\">source</a><a href=\"#impl-Eq-for-ChaCha20Rng\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"rand_chacha/struct.ChaCha20Rng.html\" title=\"struct rand_chacha::ChaCha20Rng\">ChaCha20Rng</a></h3></section>","Eq","rand_chacha::ChaChaRng"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()