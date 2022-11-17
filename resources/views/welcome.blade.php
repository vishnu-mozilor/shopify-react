@extends('shopify-app::layouts.default')

@section('content')
    <link rel="stylesheet" href="https://unpkg.com/@shopify/polaris@10.12.0/build/esm/styles.css" />
    <div id="app"></div>
@endsection

@section('scripts')
    @parent
    <script src="{{ asset('js/app.js') }}"></script>
    <script>
        actions.TitleBar.create(app, { title: 'Welcome' });
    </script>
@endsection
 