<?php

namespace App\Http\Controllers;

use App\Models\WorkoutList;
use Illuminate\Http\Request;

class WorkoutListController extends Controller
{
    public function index()
    {
        $programs = WorkoutList::all();
        return response()->json($programs);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'goal' => 'required|string',
            'schedule' => 'required|string',
            'difficulty' => 'required|string',
        ]);

        $program = WorkoutList::create($request->all());
        return response()->json($program);
    }

    public function show(WorkoutList $program)
    {
        return response()->json($program);
    }

    public function update(Request $request, WorkoutList $program)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'goal' => 'required|string',
            'schedule' => 'required|string',
            'difficulty' => 'required|string',
        ]);

        $program->update($request->all());
        return response()->json($program);
    }

    public function destroy(WorkoutList $program)
    {
        $program->delete();
        return response()->json(['message' => 'Program deleted successfully']);
    }
}
