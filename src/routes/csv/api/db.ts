import { LowSync, MemorySync } from 'lowdb'

const adapter = new MemorySync();
type Comment = {
    user: string,
    text: string,
}
const db: { data: Comment[] } = new LowSync(adapter);

db.data ||= []

function getComments(): Comment[] {
    return db.data;
}

function addComment(comment: Comment) {
    if (db.data.length >= 10) {
        db.data = db.data.slice(1);
    }
    db.data.push(comment);
}

export{ getComments, addComment };
export default { getComments, addComment };