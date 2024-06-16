searchState.loadedDescShard("tower", 0, "<code>async fn(Request) -&gt; Result&lt;Response, Error&gt;</code>\nAlias for a type-erased error type.\nErrors produced by the service.\nErrors produced by the service\nThe future response value.\nThe future of the <code>Service</code> instance.\nDecorates a <code>Service</code>, transforming either the request or …\nErrors produced while building a service.\nCreates new <code>Service</code> values.\nResponses given by the service.\nResponses given by the service\nAn asynchronous function from a <code>Request</code> to a <code>Response</code>.\nThe wrapped service\nThe <code>Service</code> value created by this factory\nDeclaratively construct <code>Service</code> values.\nAn extension trait for <code>Service</code>s that provides a variety of …\nExecutes a new future after this service’s future …\nMiddleware that allows balancing load among multiple …\nConvert the service into a <code>Service</code> + <code>Send</code> trait object.\nConvert the service into a <code>Service</code> + <code>Clone</code> + <code>Send</code> trait …\nMiddleware that provides a buffered mpsc channel to a …\nBuilder types to compose layers and services\nProcess the request and return the response asynchronously.\nProcess all requests from the given <code>Stream</code>, and produce a …\nService discovery\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nA collection of <code>Layer</code> based tower services\nWrap the given service with the middleware, returning a …\nTower middleware for limiting requests.\nService load measurement\nTrait aliases for Services that produce specific types of …\nCreate and return a new service value asynchronously.\nMaps this service’s error value to a different value. …\nComposes a function that transforms futures produced by …\nComposes a function <em>in front of</em> the service.\nMaps this service’s response value to a different value. …\nMaps this service’s result type (…\nConsume this <code>Service</code>, calling with the providing request …\nReturns <code>Poll::Ready(Ok(()))</code> when the service is able to …\nReturns <code>Poll::Ready</code> when the factory is able to create …\nYields a mutable reference to the service when it is ready …\nYields a mutable reference to the service when it is ready …\nA cache of services\nYields the service when it is ready to accept a request.\nReturns a new <code>ServiceFn</code> with the given closure.\nComposes an asynchronous function <em>after</em> this service.\nMiddleware that applies a timeout to requests.\nVarious utility types and functions that are generally …\nError types for the <code>tower::balance</code> middleware.\nThis module implements the “Power of Two Random Choices…\nThis module defines a load-balanced pool of services that …\nThe balancer’s endpoint discovery stream failed.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nEfficiently distributes requests across an arbitrary …\nConstructs load balancers over dynamic service sets …\nConstruct load balancers (<code>Balance</code>) over dynamic service …\nA <code>Balance</code> in the making.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConstructs a load balancer seeded with the provided random …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns whether or not the balancer is empty.\nReturns the number of endpoints currently tracked by the …\nBuild balancers using operating system entropy.\nBuild balancers using operating system entropy.\nConstructs a load balancer that uses operating system …\nA builder that lets you configure how a <code>Pool</code> determines …\nA dynamically sized, load-balanced pool of <code>Service</code> …\nA wrapper around <code>MakeService</code> that discovers a new service …\nSee <code>Pool::new</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nThe initial estimated load average.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWhen the estimated load (see the module-level docs) …\nThe maximum number of backing <code>Service</code> instances to …\nConstruct a new dynamically sized <code>Pool</code>.\nCreate a new builder with default values for all load …\nWhen the estimated load (see the module-level docs) drops …\nHow aggressively the estimated load average is updated.\nAdds an mpsc buffer in front of an inner service.\nAdds an mpsc buffer in front of an inner service.\nError types for the <code>Buffer</code> middleware.\nReturns the argument unchanged.\nReturns the argument unchanged.\nFuture types for the <code>Buffer</code> middleware.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreates a new <code>BufferLayer</code> with the provided <code>bound</code>.\nCreates a new <code>Buffer</code> wrapping <code>service</code>.\nCreates a new <code>Buffer</code> wrapping <code>service</code>, but returns the …\nAn error produced when the a buffer’s worker closes …\nAn error produced by a <code>Service</code> wrapped by a <code>Buffer</code>\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nFuture that completes when the buffered service eventually …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nDeclaratively construct <code>Service</code> values.\nExecutes a new future after this service’s future …\nThis wraps the inner service with the <code>Layer</code> returned by …\nThis wraps the inner service with the <code>Layer</code> returned by …\nBuffer requests when the next layer is not ready.\nCheck that the builder implements <code>Clone</code>.\nCheck that the builder when given a service of type <code>S</code> …\nCheck that the builder when given a service of type <code>S</code> …\nLimit the max number of in-flight requests.\nReturns the underlying <code>Layer</code> implementation.\nAdd a new layer <code>T</code> into the <code>ServiceBuilder</code>.\nAdd a <code>Layer</code> built from a function that accepts a service …\nMap one error type to another.\nComposes a function that transforms futures produced by …\nMap one request type to another.\nMap one response type to another.\nMaps this service’s result type (…\nCreate a new <code>ServiceBuilder</code>.\nOptionally add a new layer <code>T</code> into the <code>ServiceBuilder</code>.\nLimit requests to at most <code>num</code> per the given duration.\nWrap the service <code>S</code> with the middleware provided by this …\nWrap the async function <code>F</code> with the middleware provided by …\nApply an asynchronous function after the service, …\nFail requests that take longer than <code>timeout</code>.\nA change in the service set.\nA dynamically changing set of related services.\nError produced during discovery\nA new service identified by key <code>K</code> was identified.\nA unique identifier for each active service.\nThe service identified by key <code>K</code> disappeared.\nThe type of <code>Service</code> yielded by this <code>Discover</code>.\nStatic service discovery based on a predetermined list of …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nYields the next discovery change set.\nDecorates a <code>Service</code>, transforming either the request or …\nA <code>Layer</code> implemented by a closure. See the docs for <code>layer_fn</code>…\nThe wrapped service\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nWrap the given service with the middleware, returning a …\nReturns a new <code>LayerFn</code> that implements <code>Layer</code> by calling the …\nUtilities for combining layers\nA no-op middleware.\nTwo middlewares chained together.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate a new <code>Identity</code> value\nCreate a new <code>Stack</code>.\nLimit the max number of requests being concurrently …\nLimit the rate at which requests are processed.\nEnforces a limit on the concurrent number of requests the …\nEnforces a limit on the concurrent number of requests the …\nEnforces a limit on the concurrent number of requests the …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\n<code>Future</code> types\nGet a mutable reference to the inner service\nGet a reference to the inner service\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConsume <code>self</code>, returning the inner service\nCreate a new concurrency limit layer.\nCreate a new <code>GlobalConcurrencyLimitLayer</code>.\nCreate a new concurrency limiter.\nCreate a new <code>GlobalConcurrencyLimitLayer</code> from a …\nCreate a new concurrency limiter with a provided shared …\nFuture for the <code>ConcurrencyLimit</code> service.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nA rate of requests per time period.\nEnforces a rate limit on the number of requests the …\nEnforces a rate limit on the number of requests the …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner service\nGet a reference to the inner service\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConsume <code>self</code>, returning the inner service\nCreate new rate limit layer.\nCreate a new rate.\nCreate a new rate limiter\nWraps a type so that it implements <code>Load</code> and returns a …\nTypes that implement this trait can give an estimate of …\nA comparable load metric.\nApplication-specific request completion semantics.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nEstimate the service’s current load.\nWraps a <code>T</code>-typed service with a constant <code>M</code>-typed load …\nA <code>Load</code> implementation that measures load using the …\nA <code>Load</code> implementation that measures load using the number …\nYields the next discovery change set.\nA <code>TrackCompletion</code> implementation that considers the …\nThe instrumented value type.\nAttaches <code>H</code>-typed completion tracker to <code>V</code> typed values.\nAttaches a <code>C</code>-typed completion tracker to the result of an <code>F</code>…\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWraps a future, propagating the tracker into its value if …\nAttaches a <code>H</code>-typed handle to a <code>V</code>-typed value.\nRepresents the relative cost of communicating with a …\nTracks an in-flight request and updates the RTT-estimate …\nMeasures the load of the underlying service using …\nWraps a <code>D</code>-typed stream of discovered services with <code>PeakEwma</code>…\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWraps an <code>S</code>-typed service so that its load is tracked by …\nWraps a <code>D</code>-typed <code>Discover</code> so that services have a <code>PeakEwma</code> …\nRepresents the number of currently-pending requests to a …\nTracks an in-flight request by reference count.\nMeasures the load of the underlying service using the …\nWraps a <code>D</code>-typed stream of discovered services with …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWraps an <code>S</code>-typed service so that its load is tracked by …\nWraps a <code>Discover</code>, wrapping all of its services with …\nYields the next discovery change set.\nService returned by <code>MakeService::as_service</code>.\nThe transport provided by this service\nErrors produced by the connecting service\nErrors produced by the service\nThe future that eventually produces the transport\nThe future of the <code>Service</code> instance.\nService returned by <code>MakeService::into_service</code>.\nThe <code>MakeConnection</code> trait is used to create transports.\nErrors produced while building a service.\nCreates new <code>Service</code> values.\nResponses given by the service\nThe <code>Service</code> value created by this factory\nA <code>MakeService</code> that produces services by cloning an inner …\nConvert this <code>MakeService</code> into a <code>Service</code> without consuming …\nConvert this <code>MakeService</code> into a <code>Service</code> without consuming …\nConvert this <code>MakeService</code> into a <code>Service</code> without consuming …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nFuture types\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConsume this <code>MakeService</code> and convert it into a <code>Service</code>.\nConsume this <code>MakeService</code> and convert it into a <code>Service</code>.\nConsume this <code>MakeService</code> and convert it into a <code>Service</code>.\nConnect and return a transport asynchronously\nCreate and return a new service value asynchronously.\nCreate a new <code>Shared</code> from a service.\nReturns <code>Poll::Ready(Ok(()))</code> when it is able to make more …\nReturns <code>Poll::Ready</code> when the factory is able to create …\nResponse future from <code>Shared</code> services.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nA cache of services.\nErrors\nKey equivalence trait.\nDrives readiness over a set of services.\nCalls a ready service by key.\nCalls a ready service by index.\nChecks whether the referenced endpoint is ready.\nChecks whether the referenced endpoint is ready.\nCompare self to <code>key</code> and return <code>true</code> if they are equal.\nEvicts an item from the cache.\nReturns the argument unchanged.\nObtains a reference to a service in the ready set by key.\nObtains a reference to a service in the ready set by index.\nObtains a mutable reference to a service in the ready set …\nObtains a mutable reference to a service in the ready set …\nCalls <code>U::from(self)</code>.\nReturns whether or not there are any services in the cache.\nReturns the total number of services in the cache.\nReturns true iff the given key is in the unready set.\nReturns the number of services in the unready set.\nPolls services pending readiness, adding ready services to …\nPushes a new service onto the pending set.\nReturns the number of services in the ready set.\nAn error indicating that the service with a <code>K</code>-typed key …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nApplies a timeout to requests.\nApplies a timeout to requests via the supplied inner …\nError types\nReturns the argument unchanged.\nReturns the argument unchanged.\nFuture types\nGet a mutable reference to the inner service\nGet a reference to the inner service\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConsume <code>self</code>, returning the inner service\nCreate a timeout from a duration\nCreates a new <code>Timeout</code>\nThe timeout elapsed.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nConstruct a new elapsed error\n<code>Timeout</code> response future\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nOne type of backing <code>Service</code>.\nService returned by the <code>and_then</code> combinator.\nA <code>Layer</code> that produces a <code>AndThen</code> service.\nThe other type of backing <code>Service</code>.\nA <code>Clone</code> + <code>Send</code> boxed <code>Service</code>.\nA boxed <code>Layer</code> trait object.\nA boxed <code>Service + Send</code> trait object.\nThis is a <code>Stream</code> of responses resulting from calling the …\nA stream of responses received from the inner service in …\nCombine two different service types into a single type.\nA type that implements <code>Service</code> for a <code>Future</code> that produces …\nService returned by the <code>map_err</code> combinator.\nA <code>Layer</code> that produces <code>MapErr</code> services.\n<code>Service</code> returned by the <code>map_future</code> combinator.\nA <code>Layer</code> that produces a <code>MapFuture</code> service.\nService returned by the <code>MapRequest</code> combinator.\nA <code>Layer</code> that produces <code>MapRequest</code> services.\nService returned by the <code>map_response</code> combinator.\nA <code>Layer</code> that produces a <code>MapResponse</code> service.\nService returned by the <code>map_result</code> combinator.\nA <code>Layer</code> that produces a <code>MapResult</code> service.\nA <code>Future</code> consuming a <code>Service</code> and request, waiting until …\nOptionally forwards requests to an inner service.\nA future that yields a mutable reference to the service …\nA future that yields a mutable reference to the service …\nA <code>Future</code> that yields the service when it is ready to …\nAn extension trait for <code>Service</code>s that provides a variety of …\nA <code>Service</code> implemented by a closure.\n<code>Service</code> returned by the <code>then</code> combinator.\nA <code>Layer</code> that produces a <code>Then</code> service.\nA boxed <code>Service</code> trait object.\nExecutes a new future after this service’s future …\nConvert the service into a <code>Service</code> + <code>Send</code> trait object.\nConvert the service into a <code>Service</code> + <code>Clone</code> + <code>Send</code> trait …\nProcess all requests from the given <code>Stream</code>, and produce a …\nError types\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nFuture types\nReturns a new <code>FutureService</code> for the given future.\nGet a mutable reference to the inner service\nGet a reference to the inner service\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nExtract the wrapped <code>Service</code>.\nExtract the wrapped <code>Service</code>.\nConsume <code>self</code>, returning the inner service\nReturns a <code>Layer</code> for wrapping a <code>Service</code> in a <code>BoxService</code> …\nReturns a <code>Layer</code> for wrapping a <code>Service</code> in an …\nReturns a <code>Layer</code> for wrapping a <code>Service</code> in a <code>BoxCloneService</code>\nReturns a new <code>Layer</code> that produces <code>AndThen</code> services.\nReturns a new <code>Layer</code> that produces <code>MapErr</code> services.\nReturns a new <code>Layer</code> that produces <code>MapRequest</code> services.\nReturns a new <code>Layer</code> that produces <code>MapResponse</code> services.\nReturns a new <code>Layer</code> that produces <code>MapResult</code> services.\nReturns a new <code>Layer</code> that produces <code>MapFuture</code> services.\nReturns a new <code>Layer</code> that produces <code>Then</code> services.\nMaps this service’s error value to a different value. …\nComposes a function that transforms futures produced by …\nComposes a function <em>in front of</em> the service.\nMaps this service’s response value to a different value. …\nMaps this service’s result type (…\nCreate a new <code>BoxLayer</code>.\nCreate a new <code>BoxCloneService</code>.\nCreates a new <code>AndThen</code> service.\nCreates a new <code>AndThenLayer</code> layer.\nCreate new <code>CallAll</code> combinator.\nCreate new <code>CallAllUnordered</code> combinator.\nReturns a new <code>FutureService</code> for the given future.\nCreates a new <code>MapErr</code> service.\nCreates a new <code>MapErrLayer</code>.\nCreates a new <code>MapRequest</code> service.\nCreates a new <code>MapRequestLayer</code>.\nCreates a new <code>MapResponse</code> service.\nCreates a new <code>MapResponseLayer</code> layer.\nCreates a new <code>MapResult</code> service.\nCreates a new <code>MapResultLayer</code> layer.\nCreates a new <code>MapFuture</code> service.\nCreates a new <code>MapFutureLayer</code> layer.\nCreate a new <code>Optional</code>.\nCreates a new <code>Then</code> service.\nCreates a new <code>ThenLayer</code> layer.\nConsume this <code>Service</code>, calling with the providing request …\nConvert an <code>Option&lt;Layer&gt;</code> into a <code>Layer</code>.\nYields a mutable reference to the service when it is ready …\nYields a mutable reference to the service when it is ready …\nYields the service when it is ready to accept a request.\nReturns a new <code>ServiceFn</code> with the given closure.\nExtract the wrapped <code>Service</code>.\nExtract the wrapped <code>Service</code>.\nComposes an asynchronous function <em>after</em> this service.\nReturn responses as they are ready, regardless of the …\nError types for <code>Optional</code>.\nError returned if the inner <code>Service</code> has not been set.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nResponse future from <code>AndThen</code> services.\nResponse future from <code>MapErr</code> services.\nResponse future from <code>MapResponse</code> services.\nResponse future from <code>MapResult</code> services.\nResponse future from <code>Then</code> services.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nFuture types for <code>Optional</code>.\nResponse future returned by <code>Optional</code>.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.")