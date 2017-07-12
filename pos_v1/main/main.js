'use strict';
function SameInputs(inputs) 
{
	//inputs = inputs.sort(String(inputs).substring(10,0));
    var inputs1 = [];
    for (var i = 0; i < inputs.length; ++i ) 
    {
        var index= i + 1;
        while (String(inputs[i]).substring(10,0)== String(inputs[i+1]).substring(10,0)&& index<inputs.length) //why can't use split() function?
         {
          inputs.splice(i,1);
          index++;
         }
        var object = new Object();
        
       object.barcode = String(inputs[i]).substring(10,0);
       object.count = index- i;
       if(String(inputs[i]).length >10)
        {
        	object.count += parseFloat(String(inputs[i]).substr(11,14))-1;
        }
        inputs1.push(object);
    } 
        return inputs1;    
}
function MatchItems(inputs)
{
	for(var i=0; i<inputs.length; i++)
	{
		switch(inputs[i].barcode)
		{
			case "ITEM000005": 
				inputs[i].name='方便面';
				inputs[i].price=4.50;
				inputs[i].unit='袋';
				break;
			case "ITEM000001":
				inputs[i].name='雪碧';
				inputs[i].price=3.00;
				inputs[i].unit='瓶'
				break;
			case "ITEM000003":
				inputs[i].name='荔枝';
				inputs[i].price=15.00;
				inputs[i].unit='斤';
				break;
		}
	}
	return inputs;
}
function processInput(inputs) {
  let receiptItems = [];
  for (let item of inputs)  {
    receiptItems.push({
      barcode:item.barcode,
      name: item.name,
      unit: item.unit,
      price: item.price,
      count: item.count,
      subtotal: item.price * item.count,
      subTotal: item.price * item.count
    });
   }
    for (var i=0; i<receiptItems.length; i++)  {
  	if(receiptItems[i].barcode == 'ITEM000001' || receiptItems[i].barcode == 'ITEM000005' )
  		receiptItems[i].subTotal=receiptItems[i].price * (receiptItems[i].count-1);
  }
  return receiptItems;
}
function buildSingleItem(receiptItem) {
  return `名称：${receiptItem.name}，数量：${receiptItem.count}${receiptItem.unit}，单价：${receiptItem.price.toFixed(2)}(元)，小计：${receiptItem.subTotal.toFixed(2)}(元)`
}
function printReceipt(inputs) {
  let itemStrings = "";
  let inputs1 = SameInputs(inputs);
  let inputs2 = MatchItems(inputs1);
  let receiptItems2 = processInput(inputs2);
  let total = 0;
  let Total = 0;
  for (let index = 0; index < receiptItems2.length; index ++) {
    if (index != receiptItems2.length-1) {
      itemStrings += buildSingleItem(receiptItems2[index]) +'\n';
    } else {
      itemStrings += buildSingleItem(receiptItems2[index]);
    }
    Total += receiptItems2[index].subtotal;
    total += receiptItems2[index].subTotal;
  }
  var print = "***<没钱赚商店>收据***\n" + itemStrings + "\n----------------------\n" + "总计：" + total.toFixed(2) + "(元)\n" + "节省：" + (Total-total).toFixed(2) + "(元)\n" + "**********************";
  console.log(print);
}
var inputs=[
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000003-2.5',
      'ITEM000005',
      'ITEM000005-2.0',
    ];

printReceipt(inputs);
