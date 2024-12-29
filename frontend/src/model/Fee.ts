export default class Fee {
    public fee_id: string;
    public payment_model: string;
    public coupon_code: string;
    public student_id: string;
    constructor(fee_id: string, payment_model: string, coupon_code: string, student_id: string) {
        this.fee_id = fee_id;
        this.payment_model = payment_model;
        this.coupon_code = coupon_code;
        this.student_id = student_id;
    }
}