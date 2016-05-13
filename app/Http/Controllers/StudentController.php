<?php

namespace app\Http\Controllers;

use app\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function index()
    {
        return Student::all()->toJson();
    }

    public function store(Request $request)
    {
        $user = Student::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'school' => $request['school'],
            'class' => $request['class'],
            'status' => 'active',
            ]);

        return $user ? 'true' : 'false';
    }

    public function show($id)
    {
        //dd($id);
        $student = Student::find($id);

        return ($student) ? ($student->toJson()) : null;
    }

    public function update($id, Request $request)
    {
        $student = Student::find($id);
        if ($student) {
            $student->name = $request->name;
            $student->email = $request->email;
            $student->school = $request->school;
            $student->class = $request->class;
            $student->save();

            return 'true';
        } else {
            return false;
        }
    }

    public function activate($id)
    {
        $user = Student::find($id);
        if ($user) {
            $user->status = 'active';
            $user->save();

            return 'true';
        } else {
            return 'false';
        }
    }

    public function deactivate($id)
    {
        $user = Student::find($id);
        if ($user) {
            $user->status = 'inactive';
            $user->save();

            return 'true';
        } else {
            return 'false';
        }
    }
}
