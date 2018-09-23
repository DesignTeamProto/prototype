<!-- {{$debugpath}} -->
@extends('layouts.master')

{{-- Include Content --}}
@section('content')
    <div class="example-wrapper">
    	<span>LETS BUILD!</span>

    {{-- Include a widget example --}}
	<!-- <div>
    		@include('widgets.colleague.layout')
    	</div> -->
    </div>
@stop

@section('right')
    <div>
    	<span>RIGHT COLUMN</span>
    </div>
@stop