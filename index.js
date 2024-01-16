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
}

// 1

class Subject {
    constructor(name) {
        this.name = name
        this.students = []
        this.teachers = {}
    }
}

// 1

class Student {
    constructor(name, age, gender) {
        this.name = name
        this.age = age
        this.gender = gender
        this.subjects = []
    }
}

// 2

class Teacher {
    constructor(name) {
        this.name = name
        this.subjects = []
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