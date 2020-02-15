export default function log(data){//다른곳에서 가져다 쓸수 있도록 export 해주는것
    console.log(data);
}

export const getTime = () => {//arrow Function
    return Date.now();
}

export const getCurrentHour = () => {
    return (new Date).getHours();
}


//class가 있는 경우

export class MyLogger{
    constructor(props){
        this.lectures = ['java', 'iOS'];
    }
    getLectures(){
        return this.lectures;
    }

    getTime2(){
        return Date.now();
    }
}
