<!-- {{$debugpath}} -->
@extends('widgets.master')

{{-- Define the widget name IMPORTANT --}}
@section('widget-name', 'Colleague')

{{-- Define the widget unique class IMPORTANT --}}
@section('widget-class', 'widget-colleague')

{{-- Include Header --}}
@section('widget-header')
	<span>Widget header</span>
	<p>Widget name is: @yield('widget-name')</p>
@stop

{{-- Include Content --}}
@section('widget-content')
	<span>Widget content</span>
@stop

{{-- Include Footer --}}
@section('widget-footer')
	<span>Widget footer</span>
@stop