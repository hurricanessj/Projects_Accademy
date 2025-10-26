var MetodoPagamento;
(function (MetodoPagamento) {
    MetodoPagamento["carta"] = "carta di credito";
    MetodoPagamento["paypal"] = "paypal";
    MetodoPagamento["bonifico"] = "bonufico bancario";
})(MetodoPagamento || (MetodoPagamento = {}));
var metodo = MetodoPagamento.paypal;
console.log(metodo);
