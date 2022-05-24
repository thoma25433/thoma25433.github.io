$(document).ready(function() {
  var gold = 0;
  var money = 0;
  var goldPlus = 1;
  var autoSimplePlus = 0;
  var autoSimplePrice = 100;
  var goldPrice = 1;
  var menu;

  setInterval(function() {
    gold += autoSimplePlus;
    changeInventory();
  }, 1000);

  $("#mine").click(function() {
    gold += goldPlus;
    changeInventory();
  });

  $("#sell1").click(function() {
    if (gold == 0) {
      alert("You don't have enough to sell!");
    } else {
      gold--;
      money += goldPrice;
      changeInventory();
    }
  });

  $("#sell10").click(function() {
    if (gold <= 9) {
      alert("You don't have enough to sell!");
    } else {
      gold -= 10;
      money += goldPrice * 10;
      changeInventory();
    }
  });

  $("#sellAll").click(function() {
    if (gold == 0) {
      alert("You don't have enough to sell!");
    } else {
      money += goldPrice * gold;
      gold = 0;
      changeInventory();
    }
  });
  $("#autoSimple").click(function() {
    if (money <= 99) {
      alert("You don't have enough to buy this!");
    } else {
      money -= autoSimplePrice;
      autoSimplePlus++;
      changeInventory();
    }
  });
  $("#visit").click(function() {
    menu = switchMenu("market");
  });

  $("#close").click(function() {
    $("." + menu).css("display", "none");
  });

  function changeInventory() {
    $("#money").html("Money: $" + money);

    if (gold == 1) {
      $("#gold").html("You have " + gold + " gold!");
    } else {
      $("#gold").html("You have " + gold + " gold!");
    }
    if (autoSimplePlus >= 1) {
      $("#simples").html("You have " + autoSimplePlus + " Simple Miners!");
    } else {
      $("#simples").html("");
    }
  }

  function switchMenu(menu) {
    $("." + menu).css("display", "block");
    return menu;
  }

  function mineclick() {
    $("#mine").css("background-color", "blue");
  };

  function mineup() {
    $("#mine").css("background-color", "white");
  };
});
