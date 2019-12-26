export interface PlayerAttendance{
    [playerId: string] : boolean;
}

export class AttendanceModel{
    groupId: string;
    date: string;
    attendantPLayers: string[];
}

export class Attendance{
    
}