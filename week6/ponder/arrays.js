function convert(grade) {
    let points;

    switch (grade) {
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
            points = 0;
    }

    return points;
}

const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const students = [
    { last: 'Andrus', first: 'Aaron', grade: 'A' },
    { last: 'Masa', first: 'Manny', grade: 'B' },
    { last: 'Tanda', first: 'Tamanda', grade: 'C' }
];

words.forEach(word => {
    console.log(word.toUpperCase());
});

const output = document.getElementById('output');

students.forEach(student => {
    const points = convert(student.grade);

    console.log(
        `${student.first} ${student.last} earned ${points} points`
    );

    const studentHTML = `
        <p>
            <strong>${student.first} ${student.last}</strong><br>
            Grade: ${student.grade}<br>
            Points: ${points}
        </p>
    `;

    output.innerHTML += studentHTML;
});
