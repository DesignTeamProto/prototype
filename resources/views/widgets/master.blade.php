<div class="widget-wrapper @yield('widget-class')">
	@hasSection('widget-header')
		<header>
			@yield('widget-header')
		</header>
	@endif

	@hasSection('widget-content')
		<main>
			@yield('widget-content')
		</main>
	@endif

	@hasSection('widget-footer')
		<footer>
			@yield('widget-footer')
		</footer>
	@endif
</div>