(function () {
  intro();
  // document.getElementById("checkbox").checked = localStorage.getItem("theme") == "light" ? true : false;
  var stage = 1,
    active = 1,
    levelCount = $("div[class^=level]").length,
    createLevelState = 0;
  setTheme();
  setTimeout(function () {
    createLevels();
    showLevels();
  }, 2500);

  $("body").on("click", ".block", function () {
    var x = $(this).attr("class").replace(/\D+/g, "");
    if (active && x) {
      $(this).removeClass("r" + x);
      x++;
      if ($(this).hasClass("straight")) {
        if (x == 3) x = 1;
      } else if (x == 5) {
        x = 1;
      }
      $(this).addClass("r" + x);
      if (!createLevelState) {
        combination();
      } else {
        levelStats();
      }
    }
  });

  //d

  $("#checkbox").click(function () {
    $("body").toggleClass("light");
    if ($("body").attr("class") == "light") {
      $(".checkbox-label").css("background-color", "black");
      $(".ball").css("background-color", "white");
      // $("#theme").text("Lights Off");
      // localStorage.setItem("theme", "dark");
    } else {
      $(".checkbox-label").css("background-color", "white");
      $(".ball").css("background-color", "black");
      // $("#theme").text("Lights On");
      // localStorage.setItem("theme", "light");
    }
    // localStorage.setItem("theme", $("body").attr("class"));
  });

  function intro() {
    setTimeout(function () {
      $(".typing").css("border-right", "0px");
    }, 1000);
    setTimeout(function () {
      $(".typing-2").css("display", "block");
    }, 1000);
    setTimeout(function () {
      $(".typing-2").css("border-right", "0px");
    }, 3000);
    setTimeout(function () {
      $(".typing-ingame-1").css("display", "block");
    }, 2000);
    setTimeout(function () {
      $(".level1").css("display", "block");
    }, 2500);
    setTimeout(function () {
      $(".typing-ingame-1").css("border-right", "0px");
    }, 5000);
    setTimeout(function () {
      $(".typing-ingame-2").css("opacity", "1");
    }, 5000);
    setTimeout(function () {
      $(".typing-ingame-2").css("border-right", "0px");
    }, 8000);
    setTimeout(function () {
      $(".block").css("opacity", "0.25");
    }, 8250);
    setTimeout(function () {
      $(".block").css("opacity", "0.50");
    }, 8500);
    setTimeout(function () {
      $(".block").css("opacity", "0.75");
    }, 8750);
    setTimeout(function () {
      $(".block").css("opacity", "1");
    }, 9000);
    setTimeout(function () {
      $(".typing-ingame-3").css("opacity", "1");
    }, 9000);
    setTimeout(function () {
      $(".typing-ingame-3").css("border-right", "0px");
    }, 12000);
  }

  function combination() {
    var x = $(".level" + stage).find(".block"),
      h = "";
    $.each(x, function (i, el) {
      h += $(this).attr("class").replace(/\D+/g, "");
    });
    // console.info(h);
    if ($(".level" + stage).data("code") == h) {
      stage++;
      active = 0;
      setTimeout(function () {
        showLevels();
      }, 500);
    }
  }

  function showLevels() {
    var remove = stage - 1;
    // console.log(stage);
    $("#win .text span").text(4 - remove);
    if (stage > levelCount) {
      $(".level1").css("display", "none");
      $("#finished").fadeIn();
      setTimeout(function () {
        $(".typing-finished").css("border-right", "0px");
        $(".typing-construct").css("opacity", "1");
      }, 2000);
      setTimeout(function () {
        $(".typing-construct").css("border-right", "0px");
      }, 5000);
    } else if (stage > 1) {
      // console.log(stage);
      if (stage == 2) {
        $("#win").fadeIn();
        $(".typing-win-2").css("display", "none");
        $(".typing-win-3").css("display", "none");
        $(".typing-win-1").fadeIn();
      } else if (stage == 3) {
        $("#win").fadeIn();
        $(".typing-win-1").css("display", "none");
        $(".typing-win-3").css("display", "none");
        $(".typing-win-2").fadeIn();
      } else if (stage == 4) {
        $("#win").fadeIn();
        $(".typing-win-1").css("display", "none");
        $(".typing-win-2").css("display", "none");
        $("#win .typing-win-3").fadeIn();
      }
      $(".level1").css("display", "none");
      $("#intro").fadeOut();
      $(".level" + stage).css("top", "30%");
      $("#intro").css("display", "none");
      setTimeout(function () {
        $(".level" + remove).remove();
        $("div.level" + stage).show();
        $("#win").fadeOut();
        active = 1;
      }, 5000);
    } else {
      $("div.level" + stage).fadeIn();
    }
  }

  function createLevels() {
    $.each($("div[data-set]"), function (i, el) {
      var levelHtml = "";
      var text1 = $(this).data("text-1");
      if (text1)
        levelHtml +=
          '<div class="text typing-ingame-1">' + text1 + "</div>";
      var text2 = $(this).data("text-2");
      if (text2)
        levelHtml +=
          '<div class="text typing-ingame-2" style="margin-bottom: 20px;">' + text2 + "</div>";
      var set = $(this).data("set").split(".");
      $.each(set, function (i, el) {
        var style = "curve";
        if (set[i][0] == "s") style = "straight";
        if (set[i][0] == "e") style = "end";
        if (set[i][0] == "b") style = "";
        var rotate = "";
        if (set[i][1]) var rotate = "r" + set[i][1];
        var double = "";
        if (set[i][2]) var double = "double";
        levelHtml +=
          '<div class="block ' +
          style +
          " " +
          double +
          " " +
          rotate +
          '"></div>';
      });
      var text3 = $(this).data("text-3");
      if (text3)
        levelHtml +=
          '<div class="text typing-ingame-3">' + text3 + "</div>";
      $(this).append(levelHtml);
    });
  }

  function setTheme() {
    if (localStorage.theme == "light") {
      $("body").addClass("light");
      $("#theme").text("Lights Off");
    }
  }

  function levelStats() {
    var code = "",
      set = "";
    $.each($(".newLevel .block"), function (i, el) {
      var s = $(this).attr("class").split(" ")[1][0];
      if (s != "b") code += $(this).attr("class").replace(/\D+/g, "");
      var r = Math.floor(Math.random() * 2) + 1;
      if (s != "s") Math.floor(Math.random() * 4) + 1;
      if (s == "b") r = "";
      set += s + r + ".";
    });
    set = set.slice(0, -1);
    $(".stats").html("code: " + code + " - Set: " + set);
  }

  $(".toggleCreateLevel").click(function () {
    $("#createLevel .newLevel").empty();
    $("#createLevel").fadeToggle();
    if (!createLevelState) {
      createLevelState = 1;
    } else {
      createLevelState = 0;
    }
  });

  $(".tools img").click(function () {
    var x = $(this).attr("class");
    $(".newLevel").append('<div class="block ' + x + ' r1"></div>');
  });
})();
