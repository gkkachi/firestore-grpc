(function() {var type_impls = {
"tonic":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-UnsyncBoxBody%3CD,+E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/http_body/combinators/box_body.rs.html#78\">source</a><a href=\"#impl-UnsyncBoxBody%3CD,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;D, E&gt; <a class=\"struct\" href=\"http_body/combinators/box_body/struct.UnsyncBoxBody.html\" title=\"struct http_body::combinators::box_body::UnsyncBoxBody\">UnsyncBoxBody</a>&lt;D, E&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/http_body/combinators/box_body.rs.html#80-83\">source</a><h4 class=\"code-header\">pub fn <a href=\"http_body/combinators/box_body/struct.UnsyncBoxBody.html#tymethod.new\" class=\"fn\">new</a>&lt;B&gt;(body: B) -&gt; <a class=\"struct\" href=\"http_body/combinators/box_body/struct.UnsyncBoxBody.html\" title=\"struct http_body::combinators::box_body::UnsyncBoxBody\">UnsyncBoxBody</a>&lt;D, E&gt;<div class=\"where\">where\n    B: <a class=\"trait\" href=\"http_body/trait.Body.html\" title=\"trait http_body::Body\">Body</a>&lt;Data = D, Error = E&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,\n    D: <a class=\"trait\" href=\"bytes/buf/buf_impl/trait.Buf.html\" title=\"trait bytes::buf::buf_impl::Buf\">Buf</a>,</div></h4></section></summary><div class=\"docblock\"><p>Create a new <code>BoxBody</code>.</p>\n</div></details></div></details>",0,"tonic::body::BoxBody"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-UnsyncBoxBody%3CD,+E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/http_body/combinators/box_body.rs.html#91\">source</a><a href=\"#impl-Debug-for-UnsyncBoxBody%3CD,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;D, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"http_body/combinators/box_body/struct.UnsyncBoxBody.html\" title=\"struct http_body::combinators::box_body::UnsyncBoxBody\">UnsyncBoxBody</a>&lt;D, E&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/http_body/combinators/box_body.rs.html#92\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","tonic::body::BoxBody"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-UnsyncBoxBody%3CD,+E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/http_body/combinators/box_body.rs.html#127-129\">source</a><a href=\"#impl-Default-for-UnsyncBoxBody%3CD,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;D, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"http_body/combinators/box_body/struct.UnsyncBoxBody.html\" title=\"struct http_body::combinators::box_body::UnsyncBoxBody\">UnsyncBoxBody</a>&lt;D, E&gt;<div class=\"where\">where\n    D: <a class=\"trait\" href=\"bytes/buf/buf_impl/trait.Buf.html\" title=\"trait bytes::buf::buf_impl::Buf\">Buf</a> + 'static,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/http_body/combinators/box_body.rs.html#131\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"http_body/combinators/box_body/struct.UnsyncBoxBody.html\" title=\"struct http_body::combinators::box_body::UnsyncBoxBody\">UnsyncBoxBody</a>&lt;D, E&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.77.1/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","tonic::body::BoxBody"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Body-for-UnsyncBoxBody%3CD,+E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/http_body/combinators/box_body.rs.html#97-99\">source</a><a href=\"#impl-Body-for-UnsyncBoxBody%3CD,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;D, E&gt; <a class=\"trait\" href=\"http_body/trait.Body.html\" title=\"trait http_body::Body\">Body</a> for <a class=\"struct\" href=\"http_body/combinators/box_body/struct.UnsyncBoxBody.html\" title=\"struct http_body::combinators::box_body::UnsyncBoxBody\">UnsyncBoxBody</a>&lt;D, E&gt;<div class=\"where\">where\n    D: <a class=\"trait\" href=\"bytes/buf/buf_impl/trait.Buf.html\" title=\"trait bytes::buf::buf_impl::Buf\">Buf</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Data\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Data\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"http_body/trait.Body.html#associatedtype.Data\" class=\"associatedtype\">Data</a> = D</h4></section></summary><div class='docblock'>Values yielded by the <code>Body</code>.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"http_body/trait.Body.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = E</h4></section></summary><div class='docblock'>The error type this <code>Body</code> might generate.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.poll_data\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/http_body/combinators/box_body.rs.html#104-107\">source</a><a href=\"#method.poll_data\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"http_body/trait.Body.html#tymethod.poll_data\" class=\"fn\">poll_data</a>(\n    self: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.1/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;&amp;mut <a class=\"struct\" href=\"http_body/combinators/box_body/struct.UnsyncBoxBody.html\" title=\"struct http_body::combinators::box_body::UnsyncBoxBody\">UnsyncBoxBody</a>&lt;D, E&gt;&gt;,\n    cx: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.1/core/task/wake/struct.Context.html\" title=\"struct core::task::wake::Context\">Context</a>&lt;'_&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.1/core/task/poll/enum.Poll.html\" title=\"enum core::task::poll::Poll\">Poll</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.1/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;<a class=\"struct\" href=\"http_body/combinators/box_body/struct.UnsyncBoxBody.html\" title=\"struct http_body::combinators::box_body::UnsyncBoxBody\">UnsyncBoxBody</a>&lt;D, E&gt; as <a class=\"trait\" href=\"http_body/trait.Body.html\" title=\"trait http_body::Body\">Body</a>&gt;::<a class=\"associatedtype\" href=\"http_body/trait.Body.html#associatedtype.Data\" title=\"type http_body::Body::Data\">Data</a>, &lt;<a class=\"struct\" href=\"http_body/combinators/box_body/struct.UnsyncBoxBody.html\" title=\"struct http_body::combinators::box_body::UnsyncBoxBody\">UnsyncBoxBody</a>&lt;D, E&gt; as <a class=\"trait\" href=\"http_body/trait.Body.html\" title=\"trait http_body::Body\">Body</a>&gt;::<a class=\"associatedtype\" href=\"http_body/trait.Body.html#associatedtype.Error\" title=\"type http_body::Body::Error\">Error</a>&gt;&gt;&gt;</h4></section></summary><div class='docblock'>Attempt to pull out the next data buffer of this stream.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.poll_trailers\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/http_body/combinators/box_body.rs.html#111-114\">source</a><a href=\"#method.poll_trailers\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"http_body/trait.Body.html#tymethod.poll_trailers\" class=\"fn\">poll_trailers</a>(\n    self: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.1/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;&amp;mut <a class=\"struct\" href=\"http_body/combinators/box_body/struct.UnsyncBoxBody.html\" title=\"struct http_body::combinators::box_body::UnsyncBoxBody\">UnsyncBoxBody</a>&lt;D, E&gt;&gt;,\n    cx: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.1/core/task/wake/struct.Context.html\" title=\"struct core::task::wake::Context\">Context</a>&lt;'_&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.1/core/task/poll/enum.Poll.html\" title=\"enum core::task::poll::Poll\">Poll</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.1/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"http/header/map/struct.HeaderMap.html\" title=\"struct http::header::map::HeaderMap\">HeaderMap</a>&gt;, &lt;<a class=\"struct\" href=\"http_body/combinators/box_body/struct.UnsyncBoxBody.html\" title=\"struct http_body::combinators::box_body::UnsyncBoxBody\">UnsyncBoxBody</a>&lt;D, E&gt; as <a class=\"trait\" href=\"http_body/trait.Body.html\" title=\"trait http_body::Body\">Body</a>&gt;::<a class=\"associatedtype\" href=\"http_body/trait.Body.html#associatedtype.Error\" title=\"type http_body::Body::Error\">Error</a>&gt;&gt;</h4></section></summary><div class='docblock'>Poll for an optional <strong>single</strong> <code>HeaderMap</code> of trailers. <a href=\"http_body/trait.Body.html#tymethod.poll_trailers\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_end_stream\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/http_body/combinators/box_body.rs.html#118\">source</a><a href=\"#method.is_end_stream\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"http_body/trait.Body.html#method.is_end_stream\" class=\"fn\">is_end_stream</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Returns <code>true</code> when the end of stream has been reached. <a href=\"http_body/trait.Body.html#method.is_end_stream\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.size_hint\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/http_body/combinators/box_body.rs.html#122\">source</a><a href=\"#method.size_hint\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"http_body/trait.Body.html#method.size_hint\" class=\"fn\">size_hint</a>(&amp;self) -&gt; <a class=\"struct\" href=\"http_body/size_hint/struct.SizeHint.html\" title=\"struct http_body::size_hint::SizeHint\">SizeHint</a></h4></section></summary><div class='docblock'>Returns the bounds on the remaining length of the stream. <a href=\"http_body/trait.Body.html#method.size_hint\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.data\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/http_body/lib.rs.html#89-91\">source</a><a href=\"#method.data\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"http_body/trait.Body.html#method.data\" class=\"fn\">data</a>(&amp;mut self) -&gt; <a class=\"struct\" href=\"http_body/next/struct.Data.html\" title=\"struct http_body::next::Data\">Data</a>&lt;'_, Self&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"Data&lt;&#39;_, Self&gt;\">ⓘ</a><div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Returns future that resolves to next data chunk, if any.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.trailers\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/http_body/lib.rs.html#97-99\">source</a><a href=\"#method.trailers\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"http_body/trait.Body.html#method.trailers\" class=\"fn\">trailers</a>(&amp;mut self) -&gt; <a class=\"struct\" href=\"http_body/next/struct.Trailers.html\" title=\"struct http_body::next::Trailers\">Trailers</a>&lt;'_, Self&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"Trailers&lt;&#39;_, Self&gt;\">ⓘ</a><div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Returns future that resolves to trailers, if any.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.map_data\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/http_body/lib.rs.html#105-109\">source</a><a href=\"#method.map_data\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"http_body/trait.Body.html#method.map_data\" class=\"fn\">map_data</a>&lt;F, B&gt;(self, f: F) -&gt; <a class=\"struct\" href=\"http_body/combinators/map_data/struct.MapData.html\" title=\"struct http_body::combinators::map_data::MapData\">MapData</a>&lt;Self, F&gt;<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(Self::<a class=\"associatedtype\" href=\"http_body/trait.Body.html#associatedtype.Data\" title=\"type http_body::Body::Data\">Data</a>) -&gt; B,\n    B: <a class=\"trait\" href=\"bytes/buf/buf_impl/trait.Buf.html\" title=\"trait bytes::buf::buf_impl::Buf\">Buf</a>,</div></h4></section></summary><div class='docblock'>Maps this body’s data value to a different value.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.map_err\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/http_body/lib.rs.html#115-118\">source</a><a href=\"#method.map_err\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"http_body/trait.Body.html#method.map_err\" class=\"fn\">map_err</a>&lt;F, E&gt;(self, f: F) -&gt; <a class=\"struct\" href=\"http_body/combinators/map_err/struct.MapErr.html\" title=\"struct http_body::combinators::map_err::MapErr\">MapErr</a>&lt;Self, F&gt;<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(Self::<a class=\"associatedtype\" href=\"http_body/trait.Body.html#associatedtype.Error\" title=\"type http_body::Body::Error\">Error</a>) -&gt; E,</div></h4></section></summary><div class='docblock'>Maps this body’s error value to a different value.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.collect\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/http_body/lib.rs.html#125-127\">source</a><a href=\"#method.collect\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"http_body/trait.Body.html#method.collect\" class=\"fn\">collect</a>(self) -&gt; Collect&lt;Self&gt;<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Turn this body into <a href=\"http_body/collect/struct.Collected.html\" title=\"struct http_body::collect::Collected\"><code>Collected</code></a> body which will collect all the DATA frames\nand trailers.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.boxed_unsync\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/http_body/lib.rs.html#141-143\">source</a><a href=\"#method.boxed_unsync\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"http_body/trait.Body.html#method.boxed_unsync\" class=\"fn\">boxed_unsync</a>(self) -&gt; <a class=\"struct\" href=\"http_body/combinators/box_body/struct.UnsyncBoxBody.html\" title=\"struct http_body::combinators::box_body::UnsyncBoxBody\">UnsyncBoxBody</a>&lt;Self::<a class=\"associatedtype\" href=\"http_body/trait.Body.html#associatedtype.Data\" title=\"type http_body::Body::Data\">Data</a>, Self::<a class=\"associatedtype\" href=\"http_body/trait.Body.html#associatedtype.Error\" title=\"type http_body::Body::Error\">Error</a>&gt;<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,</div></h4></section></summary><div class='docblock'>Turn this body into a boxed trait object that is !Sync.</div></details></div></details>","Body","tonic::body::BoxBody"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()