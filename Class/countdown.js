export default class Countdown {
    constructor(futureDate) {
        this.futureDate = futureDate
    }
    get _presentDate() {
        return new Date()
    }
    get _futureDate() {
        return new Date(this.futureDate)
    }
    get _timeStamp() {
        return this._futureDate.getTime() - this._presentDate.getTime()
    }
    get days() {
        return Math.floor(this._timeStamp / (24 * 60 * 60 * 1000))
    }
    get hours() {
        return Math.floor(this._timeStamp / (60 * 60 * 1000))
    }
    get minutes() {
        return Math.floor(this._timeStamp / (60 * 1000))
    }
    get seconds() {
        return Math.floor(this._timeStamp / (1000))
    }
    get total() {
        const days = this.days
        const hours = this.hours % 60
        const minutes = this.minutes % 60
        const seconds = this.seconds % 60
        return {
            days,
            hours,
            minutes,
            seconds,
        }
    }
}
