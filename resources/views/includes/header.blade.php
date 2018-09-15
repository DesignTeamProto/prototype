<!-- {{$debugpath}} -->
<header class="page-header">
	<div class="inner">
		<figure class="page-logo">
			 <a href="/" title="{{ Lang::get('basicpage.logotitle') }}">
				<img src="{{ asset('img/embrace.jpg') }}" alt="Logo {{ env('APP_NAME') }}">
				<span class="logo-text">{{ env('APP_NAME') }}</span>
			 </a>
		</figure>

		@include('pages.basicpage.navmain')
	</div>	
</header>