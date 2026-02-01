// Faculty data object
const faculty = {
    'brother-jack': {
        name: 'Brother Jack',
        office: 'STC 392',
        phone: '208-496-1234',
        email: 'jackb@byui.edu',
        department: 'Computer Science',
        title: 'Associate Professor'
    },
    'sister-enkey': {
        name: 'Sister Enkey',
        office: 'STC 394',
        phone: '208-496-2345', 
        email: 'enkeys@byui.edu',
        department: 'Computer Science',
        title: 'Assistant Professor'
    },
    'brother-keers': {
        name: 'Brother Keers',
        office: 'STC 390',
        phone: '208-496-3456',
        email: 'keersb@byui.edu',
        department: 'Computer Science', 
        title: 'Professor'
    },
    'sister-anderson': {
        name: 'Sister Anderson',
        office: 'MC 301',
        phone: '208-496-4567',
        email: 'andersons@byui.edu',
        department: 'Mathematics',
        title: 'Professor'
    },
    'brother-miller': {
        name: 'Brother Miller',
        office: 'MC 305',
        phone: '208-496-5678',
        email: 'millerb@byui.edu',
        department: 'Mathematics',
        title: 'Associate Professor'
    },
    'brother-thompson': {
        name: 'Brother Thompson', 
        office: 'MC 307',
        phone: '208-496-6789',
        email: 'thompsonb@byui.edu',
        department: 'Mathematics',
        title: 'Assistant Professor'
    },
    'brother-davis': {
        name: 'Brother Davis',
        office: 'GEB 205',
        phone: '208-496-7890',
        email: 'davisb@byui.edu',
        department: 'English',
        title: 'Professor'
    },
    'brother-wilson': {
        name: 'Brother Wilson',
        office: 'GEB 301', 
        phone: '208-496-8901',
        email: 'wilsonb@byui.edu',
        department: 'History',
        title: 'Associate Professor'
    },
    'sister-roberts': {
        name: 'Sister Roberts',
        office: 'GEB 305',
        phone: '208-496-9012',
        email: 'robertss@byui.edu',
        department: 'History', 
        title: 'Assistant Professor'
    }
};

export const getFacultyById = (facultyId) => {
    const facultyKey = facultyId.replace(" ","-").toLowerCase();
    return faculty[facultyKey] || null;
};

export const getSortedFaculty = (sortBy) => {
    const facultyArray = [];
    for (const key in faculty) {
        facultyArray.push(faculty[key]);
    }

    facultyArray.sort((a, b) => {
        console.log(`Sorting by ${sortBy}`);
        const entryA = sortBy == 'name' ? getFirstName(a) : a[sortBy];
        const entryB = sortBy == 'name' ? getFirstName(b) : b[sortBy];
        
        if (entryA < entryB) {
            return -1;
        }
        if (entryA > entryB) {
            return 1;
        }
        return 0;
    });

    return facultyArray;
};

const getFirstName = (facultyMember) => { 
    return facultyMember.name.split(" ")[1] || facultyMember.name;
}