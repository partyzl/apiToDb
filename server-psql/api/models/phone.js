const db = require('../dbConfig');

class Phone {
    constructor(data){
        this.id = data.id;
        this.name = data.name;
        this.age = data.age;
        this.phoneNumber = data.phoneNumber;
    }

    static get all(){
        return new Promise(async(resolve, reject)=>{
            try {
                const phoneData = await db.query(`SELECT * FROM phonebook;`);
                const phone = await phoneData.rows.map(p=>new Phone(p));
                resolve(phone);
            } catch (error) {
                reject("Error receiving Phone Database");
            }
        })
    }

    static create(name, age, phoneNumber){
        return new Promise(async(resolve, reject)=>{
            try {
                const phoneData = await db.query
                    (`INSERT INTO phonebook (name, age, phoneNumber) VALUES($1, $2, $3) RETURNING *;`,
                     [name, age, phoneNumber]);
                let newPhoneEntry = new Phone(phoneData.rows[0]);
                resolve(newPhoneEntry);
            } catch (error) {
                reject('Error creating new Phone Entry');
            }
        })
    }
}

module.exports = Phone;