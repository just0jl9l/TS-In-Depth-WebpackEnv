var Utility;
(function (Utility) {
    var Fees;
    (function (Fees) {
        function calculateLateFee(daysLate) {
            return daysLate * 0.25;
        }
        Fees.calculateLateFee = calculateLateFee;
    })(Fees = Utility.Fees || (Utility.Fees = {}));
    function MaxBooksAllowed(age) {
        return age < 12 ? 3 : 10;
    }
    Utility.MaxBooksAllowed = MaxBooksAllowed;
    function privateFunc() {
        console.log('This is private');
    }
})(Utility || (Utility = {}));
/// <reference path="utility-functions.ts" />
var util = Utility.Fees;
console.log(Utility.MaxBooksAllowed(5));
console.log(Utility.MaxBooksAllowed(25));
console.log(Utility.Fees.CalculateLateFee(5));
console.log(util.CalculateLateFee(5));