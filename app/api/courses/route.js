import { NextResponse } from 'next/server'
import courses from './data.json'

export async function GET(request) {
    return NextResponse.json(courses)
}

export async function POST(request) {
    const course = await request.json()
    const newCourse = { id: courses.length + 1, title, description }
    courses.push(newCourse)

    return NextResponse.json(newCourse)
}