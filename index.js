// 1

class School {
    constructor(name, address, zip, city) {
        this.name = name
        this.students = []
        this.teachers = []
        this.address = address
        this.zip = zip
        this.city = city
    }
    addTeacher = function(teacher) {
        this.teachers.push(teacher)
    }
    addStudent = function(student) {
        this.students.push(student)
    }
    fireTeacher = function(teacher) {
        while (teacher.subjects.length !== 0) {
            teacher.quitSubject(teacher.subjects[0])
        }
        this.teachers = this.teachers.filter((x) => x !==teacher)
    }
    relegateStudent = function(student) {
        while (student.subjects.length !== 0) {
            student.quitSubject(student.subjects[0])
        }
        this.students = this.students.filter((x) => x!==student)
    }
}

// 1

class Subject {
    constructor(name) {
        this.name = name
        this.students = []
        this.teachers = [] // the assignment said object, why?
    }
    addTeacher = function(teacher) {
        teacher.addSubject(this)
    }
    addStudent = function(student) {
        student.enlistToSubject(this)
    }
    removeTeacher = function(teacher) {
        teacher.quitSubject(this)
    }
 }

// 1

class Student {
    constructor(name, age, gender) {
        this.name = name
        this.age = age
        this.gender = gender
        this.subjects = []
        this.grades = []
    }
    enlistToSubject = function(subject) {
        subject.students.push(this)
        this.subjects.push(subject)
    }
    quitSubject = function(subject) {
        subject.students = subject.students.filter((x) => x!==this)
        this.subjects = this.subjects.filter((x) => x!==subject)
    }
    addGrade = function(subject, grade) {
        this.grades.push(new Grade(subject, grade))
    }
    removeGrade = function(subject) {
        this.grades = this.grades.filter((s) => s.subject !== subject)
    }
    changeGrade = function(subject, grade) {
        this.removeGrade(subject)
        this.addGrade(subject, grade)
    }
}

// 2

class Teacher {
    constructor(name) {
        this.name = name
        this.subjects = []
    }
    addSubject = function(subject) {
        subject.teachers.push(this)
        this.subjects.push(subject)
    }
    quitSubject = function(subject) {
        subject.teachers = subject.teachers.filter((x) => x!==this)
        this.subjects = this.subjects.filter((x) => x!==subject)
    }
}

class Grade {
    constructor(subject, grade) {
        this.subject = subject
        this.grade = grade
    }
    name = function() {
        return `${this.subject.name}: ${this.grade}`
    }
}

// 3

const school = new School(
    "Magic School",
    "Magic Street",
    "MG66666",
    "Magic Town"
)

const subjectPyromancy = new Subject("Pyromancy")
const subjectNecromancy = new Subject("Necromancy")
const subjectAlchemy = new Subject("Alchemy")

const studentBob = new Student("Bob Butterstaff", 15, "male")
const studentMartha = new Student("Martha Goodwitch", 16, "female")
const studentSiegfried = new Student("Siegfried Dragonslayer", 16, "male")
const studentLemon = new Student("Lemon Clocksmith", 15, "female")
const studentBerry = new Student("Berry Bones", 17, "male")

const teacherBumblebore = new Teacher("Professor Bumblebore")
const teacherGouda = new Teacher("Master Gouda")

// 4

// teacherBumblebore.subjects.push(subjectAlchemy)
// console.log(teacherBumblebore, subjectAlchemy)

/**
 * Like the last assignment, the teacher is not added
 * to the subject. But the information can still be
 * acquired by iterating over the subjects of the
 * teachers.
 */

// 5 

// subjectAlchemy.students.push(studentBob)
// console.log(studentBob, subjectAlchemy)

/**
 * Same issue as before, but in reverse, nothing new.
 */

// 6

// 7

// teacherBumblebore.addSubjectToTeacher(subjectAlchemy)
// console.log(teacherBumblebore, subjectAlchemy)

// 8

// 9

//subjectAlchemy.addStudent(studentBerry)
// console.log(studentBerry, subjectAlchemy)

// subjectAlchemy.addStudent(studentBob)
// subjectAlchemy.addTeacher(teacherBumblebore)
// console.log(studentBerry, studentBob, teacherBumblebore, subjectAlchemy)

// studentBerry.enlistToSubject(subjectAlchemy)
// console.log(studentBerry, subjectAlchemy)

// teacherBumblebore.addSubject(subjectNecromancy)
// console.log(teacherBumblebore, subjectNecromancy)

// 10

// 11

// school.addTeacher(teacherBumblebore)
// teacherBumblebore.addSubject(subjectAlchemy)
// school.fireTeacher(teacherBumblebore)
// console.log(teacherBumblebore, subjectAlchemy, school)

// school.addStudent(studentBerry)
// subjectAlchemy.addStudent(studentBerry)
// school.relegateStudent(studentBerry)
// console.log(studentBerry, subjectAlchemy, school)

// 12

function setup() {
    school.addStudent(studentBerry)
    school.addStudent(studentBob)
    school.addStudent(studentLemon)
    school.addStudent(studentSiegfried)
    school.addStudent(studentMartha)
    school.addTeacher(teacherBumblebore)
    school.addTeacher(teacherGouda)
    subjectAlchemy.addTeacher(teacherBumblebore)
    subjectNecromancy.addTeacher(teacherBumblebore)
    subjectPyromancy.addTeacher(teacherGouda)
    subjectAlchemy.addStudent(studentBerry)
    subjectAlchemy.addStudent(studentBob)
    subjectNecromancy.addStudent(studentSiegfried)
    subjectNecromancy.addStudent(studentLemon)
    subjectNecromancy.addStudent(studentBerry)
    subjectPyromancy.addStudent(studentSiegfried)
    subjectPyromancy.addStudent(studentBob)
    subjectPyromancy.addStudent(studentMartha)
}
setup()

// 13
function displayAllStudents() {
    for (student of school.students) {
        console.log(student.name, student.age, student.gender,
            student.subjects.map((s) => s.name).join(", "))
    }
}
// displayAllStudents()

// 14
function displayAllSubjectsOfStudent(student) {
    return student.subjects.map((s) => s.name).join(", ")
}
// console.log(displayAllSubjectsOfStudent(studentBerry))

function displayAllStudentsEnlistedToSubject(subject) {
    return subject.students.map((s) => s.name).join(", ")
}
// console.log(displayAllStudentsEnlistedToSubject(subjectPyromancy))

function displayAllTeachers() {
    return school.teachers.map((t) => t.name).join(", ")
}
// console.log(displayAllTeachers())

// 15

studentBerry.addGrade(subjectAlchemy, "A")
studentBerry.addGrade(subjectNecromancy, "C")
studentBerry.changeGrade(subjectNecromancy, "B")

function displayAllStudentsGrades(student) {
    return student.grades.map((g) => g.name()).join(", ")
}
// console.log(displayAllStudentsGrades(studentBerry))

studentBob.addGrade(subjectPyromancy, "D")
studentLemon.addGrade(subjectNecromancy, "A")

function displayAllGrades() {
    result = ""
    for (student of school.students) {
        result += `${student.name}: ${student.grades.map((g) => g.name()).join(", ")}\n`
    }
    return result
}

console.log(displayAllGrades())

function displayAllGradesOfSubject(subject) {
    result = ""
    for (student of school.students) {
        if (student.grades.map((g) => g.subject).includes(subject)) // no {} works?
        result += `${student.name}: ${student.grades.map((g) => g.name()).join(", ")}\n`
    }
    return result
}

console.log(displayAllGradesOfSubject(subjectNecromancy))

/**
 * Grades only need to be added to student
 */