(self.webpackChunk=self.webpackChunk||[]).push([[9076],{9076:n=>{n.exports='<p>Providing the <code>mode</code> configuration option tells webpack to use its built-in optimizations accordingly.</p> <p><code>string = \'production\': \'none\' | \'development\' | \'production\'</code></p> <h2 id="usage">Usage<a href="#usage" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h2> <p>Provide the <code>mode</code> option in the config:</p> <pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  mode<span class="token operator">:</span> <span class="token string">\'development\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <p>or pass it as a <a href="/api/cli/">CLI</a> argument:</p> <pre><code class="hljs language-bash">webpack --mode<span class="token operator">=</span>development</code></pre> <p>The following string values are supported:</p> <table> <thead> <tr> <th>Option</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td><div class="title"><p>Option</p><p>Description</p></div><div class="content"><p><code>development</code></p><p class="description mobile">Sets <code>process.env.NODE_ENV</code> on <code>DefinePlugin</code> to value <code>development</code>. Enables <code>NamedChunksPlugin</code> and <code>NamedModulesPlugin</code>.</p><p></p></div></td> <td class="description desktop">Sets <code>process.env.NODE_ENV</code> on <code>DefinePlugin</code> to value <code>development</code>. Enables <code>NamedChunksPlugin</code> and <code>NamedModulesPlugin</code>.</td> </tr> <tr> <td><div class="title"><p>Option</p><p>Description</p></div><div class="content"><p><code>production</code></p><p class="description mobile">Sets <code>process.env.NODE_ENV</code> on <code>DefinePlugin</code> to value <code>production</code>. Enables <code>FlagDependencyUsagePlugin</code>, <code>FlagIncludedChunksPlugin</code>, <code>ModuleConcatenationPlugin</code>, <code>NoEmitOnErrorsPlugin</code>, <code>OccurrenceOrderPlugin</code>, <code>SideEffectsFlagPlugin</code> and <code>TerserPlugin</code>.</p><p></p></div></td> <td class="description desktop">Sets <code>process.env.NODE_ENV</code> on <code>DefinePlugin</code> to value <code>production</code>. Enables <code>FlagDependencyUsagePlugin</code>, <code>FlagIncludedChunksPlugin</code>, <code>ModuleConcatenationPlugin</code>, <code>NoEmitOnErrorsPlugin</code>, <code>OccurrenceOrderPlugin</code>, <code>SideEffectsFlagPlugin</code> and <code>TerserPlugin</code>.</td> </tr> <tr> <td><div class="title"><p>Option</p><p>Description</p></div><div class="content"><p><code>none</code></p><p class="description mobile">Opts out of any default optimization options</p><p></p></div></td> <td class="description desktop">Opts out of any default optimization options</td> </tr> </tbody> </table> <p>If not set, webpack sets <code>production</code> as the default value for <code>mode</code>.</p> <blockquote class="tip"> <p>Please remember that setting <code>NODE_ENV</code> doesn\'t automatically set <code>mode</code>.</p> </blockquote> <h3 id="mode-development">Mode: development<a href="#mode-development" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <pre><code class="hljs language-diff">// webpack.development.config.js\nmodule.exports = {\n<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> mode: \'development\'\n</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> devtool: \'eval\',\n</span><span class="token prefix deleted">-</span><span class="token line"> cache: true,\n</span><span class="token prefix deleted">-</span><span class="token line"> performance: {\n</span><span class="token prefix deleted">-</span><span class="token line">   hints: false\n</span><span class="token prefix deleted">-</span><span class="token line"> },\n</span><span class="token prefix deleted">-</span><span class="token line"> output: {\n</span><span class="token prefix deleted">-</span><span class="token line">   pathinfo: true\n</span><span class="token prefix deleted">-</span><span class="token line"> },\n</span><span class="token prefix deleted">-</span><span class="token line"> optimization: {\n</span><span class="token prefix deleted">-</span><span class="token line">   namedModules: true,\n</span><span class="token prefix deleted">-</span><span class="token line">   namedChunks: true,\n</span><span class="token prefix deleted">-</span><span class="token line">   nodeEnv: \'development\',\n</span><span class="token prefix deleted">-</span><span class="token line">   flagIncludedChunks: false,\n</span><span class="token prefix deleted">-</span><span class="token line">   occurrenceOrder: false,\n</span><span class="token prefix deleted">-</span><span class="token line">   concatenateModules: false,\n</span><span class="token prefix deleted">-</span><span class="token line">   splitChunks: {\n</span><span class="token prefix deleted">-</span><span class="token line">     hidePathInfo: false,\n</span><span class="token prefix deleted">-</span><span class="token line">     minSize: 10000,\n</span><span class="token prefix deleted">-</span><span class="token line">     maxAsyncRequests: Infinity,\n</span><span class="token prefix deleted">-</span><span class="token line">     maxInitialRequests: Infinity,\n</span><span class="token prefix deleted">-</span><span class="token line">   },\n</span><span class="token prefix deleted">-</span><span class="token line">   emitOnErrors: true,\n</span><span class="token prefix deleted">-</span><span class="token line">   checkWasmTypes: false,\n</span><span class="token prefix deleted">-</span><span class="token line">   minimize: false,\n</span><span class="token prefix deleted">-</span><span class="token line">   removeAvailableModules: false\n</span><span class="token prefix deleted">-</span><span class="token line"> },\n</span><span class="token prefix deleted">-</span><span class="token line"> plugins: [\n</span><span class="token prefix deleted">-</span><span class="token line">   new webpack.NamedModulesPlugin(),\n</span><span class="token prefix deleted">-</span><span class="token line">   new webpack.NamedChunksPlugin(),\n</span><span class="token prefix deleted">-</span><span class="token line">   new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("development") }),\n</span><span class="token prefix deleted">-</span><span class="token line"> ]\n</span></span>}</code></pre> <h3 id="mode-production">Mode: production<a href="#mode-production" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <pre><code class="hljs language-diff">// webpack.production.config.js\nmodule.exports = {\n<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">  mode: \'production\',\n</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> performance: {\n</span><span class="token prefix deleted">-</span><span class="token line">   hints: \'warning\'\n</span><span class="token prefix deleted">-</span><span class="token line"> },\n</span><span class="token prefix deleted">-</span><span class="token line"> output: {\n</span><span class="token prefix deleted">-</span><span class="token line">   pathinfo: false\n</span><span class="token prefix deleted">-</span><span class="token line"> },\n</span><span class="token prefix deleted">-</span><span class="token line"> optimization: {\n</span><span class="token prefix deleted">-</span><span class="token line">   namedModules: false,\n</span><span class="token prefix deleted">-</span><span class="token line">   namedChunks: false,\n</span><span class="token prefix deleted">-</span><span class="token line">   nodeEnv: \'production\',\n</span><span class="token prefix deleted">-</span><span class="token line">   flagIncludedChunks: true,\n</span><span class="token prefix deleted">-</span><span class="token line">   occurrenceOrder: true,\n</span><span class="token prefix deleted">-</span><span class="token line">   concatenateModules: true,\n</span><span class="token prefix deleted">-</span><span class="token line">   splitChunks: {\n</span><span class="token prefix deleted">-</span><span class="token line">     hidePathInfo: true,\n</span><span class="token prefix deleted">-</span><span class="token line">     minSize: 30000,\n</span><span class="token prefix deleted">-</span><span class="token line">     maxAsyncRequests: 5,\n</span><span class="token prefix deleted">-</span><span class="token line">     maxInitialRequests: 3,\n</span><span class="token prefix deleted">-</span><span class="token line">   },\n</span><span class="token prefix deleted">-</span><span class="token line">   emitOnErrors: false,\n</span><span class="token prefix deleted">-</span><span class="token line">   checkWasmTypes: true,\n</span><span class="token prefix deleted">-</span><span class="token line">   minimize: true,\n</span><span class="token prefix deleted">-</span><span class="token line"> },\n</span><span class="token prefix deleted">-</span><span class="token line"> plugins: [\n</span><span class="token prefix deleted">-</span><span class="token line">   new TerserPlugin(/* ... */),\n</span><span class="token prefix deleted">-</span><span class="token line">   new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),\n</span><span class="token prefix deleted">-</span><span class="token line">   new webpack.optimize.ModuleConcatenationPlugin(),\n</span><span class="token prefix deleted">-</span><span class="token line">   new webpack.NoEmitOnErrorsPlugin()\n</span><span class="token prefix deleted">-</span><span class="token line"> ]\n</span></span>}</code></pre> <h3 id="mode-none">Mode: none<a href="#mode-none" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <pre><code class="hljs language-diff">// webpack.custom.config.js\nmodule.exports = {\n<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> mode: \'none\',\n</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> performance: {\n</span><span class="token prefix deleted">-</span><span class="token line">  hints: false\n</span><span class="token prefix deleted">-</span><span class="token line"> },\n</span><span class="token prefix deleted">-</span><span class="token line"> optimization: {\n</span><span class="token prefix deleted">-</span><span class="token line">   flagIncludedChunks: false,\n</span><span class="token prefix deleted">-</span><span class="token line">   occurrenceOrder: false,\n</span><span class="token prefix deleted">-</span><span class="token line">   concatenateModules: false,\n</span><span class="token prefix deleted">-</span><span class="token line">   splitChunks: {\n</span><span class="token prefix deleted">-</span><span class="token line">     hidePathInfo: false,\n</span><span class="token prefix deleted">-</span><span class="token line">     minSize: 10000,\n</span><span class="token prefix deleted">-</span><span class="token line">     maxAsyncRequests: Infinity,\n</span><span class="token prefix deleted">-</span><span class="token line">     maxInitialRequests: Infinity,\n</span><span class="token prefix deleted">-</span><span class="token line">   },\n</span><span class="token prefix deleted">-</span><span class="token line">   emitOnErrors: true,\n</span><span class="token prefix deleted">-</span><span class="token line">   checkWasmTypes: false,\n</span><span class="token prefix deleted">-</span><span class="token line">   minimize: false,\n</span><span class="token prefix deleted">-</span><span class="token line"> },\n</span><span class="token prefix deleted">-</span><span class="token line"> plugins: []\n</span></span>}</code></pre> <p>If you want to change the behavior according to the <strong>mode</strong> variable inside the <em>webpack.config.js</em>, you have to export a function instead of an object:</p> <pre><code class="hljs language-javascript"><span class="token keyword">var</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token operator">:</span> <span class="token string">\'./app.js\'</span>\n  <span class="token comment">//...</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">env<span class="token punctuation">,</span> argv</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>argv<span class="token punctuation">.</span>mode <span class="token operator">===</span> <span class="token string">\'development\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    config<span class="token punctuation">.</span>devtool <span class="token operator">=</span> <span class="token string">\'source-map\'</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>argv<span class="token punctuation">.</span>mode <span class="token operator">===</span> <span class="token string">\'production\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">//...</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> config<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> '}}]);