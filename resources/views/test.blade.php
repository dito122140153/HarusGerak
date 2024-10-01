<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <form method="POST" action="{{route('profile.store')}}">
        @csrf

        <input type="text" name="gender">
        <input type="number" name="age">
        <input type="number" name="weight">
        <input type="number" name="height">
        <input type="text" name="physical_activity">
        <input type="text" name="photo">
        <button type="submit">Submit</button>
        
    </form>
</body>
</html>
