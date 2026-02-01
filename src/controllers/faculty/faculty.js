import { getFacultyById, getSortedFaculty } from "../../models/faculty/faculty.js";

export const facultyPage = (req, res) => {
    const faculty = getSortedFaculty(req.query.sort || 'id');
        
    res.render('faculty/list', {
        title: 'Faculty List',
        faculty: faculty
    })
}

export const facultyDetailPage = (req, res, next) => {
    const facultyId = req.params.facultyId;
    const faculty = getFacultyById(facultyId);

    if (!faculty) {
        const err = new Error(`Faculty ${facultyId} not found`);
        err.status = 404;
        return next(err);
    }

    res.render('faculty/detail', {
        title: `${faculty.id} - ${faculty.name}`,
        faculty: faculty
    });

}