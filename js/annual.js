$(document).ready(function () {
    //메뉴
    $('.menu_btn').click(function () {
        $(this).toggleClass('active').next('.a_menu').toggleClass('active');
        return false;
    });
    $('.a_nav a').click(function () {
        var a_index = $(this).parent().index();
        $('.pagination1').children('span').eq(a_index).click();
        $('.menu_btn').removeClass('active');
        $('.a_menu').removeClass('active');
        return false;
    });
    $('.dim').click(function () {
        $('.menu_btn').removeClass('active');
        $('.a_menu').removeClass('active');
    });
    //메뉴2
    $('.even ul li').click(function () {
        var idx = $(this).index();
        $(this).parents('.a_slider2').children('.swiper-wrapper').siblings('.swiper-pagination').children('span').eq(idx+1).click();
        return false;
    });
    $('.odd ul li').click(function () {
        var idx = $(this).index();
         $(this).parents('.a_slider2').children('.swiper-wrapper').siblings('.swiper-pagination').children('span:odd').eq(idx).click();
        return false;
    });

    //mousey
    function mouseAni() {
        $('.txt_cont').each(function () {
            var txtCont = $(this).height();
            var inner = $(this).children('.inner').height();
            if (txtCont < inner) {
                $(this).next('.mousey').show();
            } else {
                $(this).next('.mousey').hide();
            };
        });
    }

    mouseAni();

    $(window).resize(function () {
        mouseAni();
    });


    var swiper = new Swiper(".a_slider1", {
        direction: "vertical",
        shortSwipes: false,
        breakpoints: {
            786: {
                direction: "horizontal",
                touchRatio: 0,
                mousewheelControl: false,
            },
        },
        slidesPerView: 'auto',
        // mousewheel: true,
        mousewheelControl: true,
        pagination: '.pagination1',
        paginationClickable: true,
        speed: 1000,
        longSwipesMs: 1000,
        longSwipes: true,
        // touchRatio: 0,    

    });
    var swiper = new Swiper(".a_slider2", {
        slidesPerView: 1,
        // mousewheel: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: '.swiper-pagination',
        paginationClickable: true,
        // paginationBulletRender: function (swiper, index, className) {
        //     return '<span class="' + className + '">' + (index + 1) + '</span>';
        // },
        speed: 1000,
        slideActiveClass: 'slide-active',
        // touchRatio: 0,
        onSlideChangeStart: function (swiper) {
            var index = swiper.activeIndex;
            am4core.useTheme(am4themes_animated);
            if (index == 2) {
                // Create chart instance
                var chart1 = am4core.create("chart01", am4charts.XYChart);
                // Add data
                chart1.data = [{
                    "date": new Date(1988, 1, 1),
                    "value": 238345,
                    "value2": 0,
                    "value3": 0,
                    "value4": 0,
                    "value5": 49302,
                    "value6": 0,
                }, {
                    "date": new Date(1989, 1, 1),
                    "value": 234103,
                    "value2": 0,
                    "value3": 0,
                    "value4": 0,
                    "value5": 24609,
                    "value6": 0,
                }, {
                    "date": new Date(1990, 1, 1),
                    "value": 303780,
                    "value2": 0,
                    "value3": 38268,
                    "value4": 0,
                    "value5": 27231,
                    "value6": 0,
                }, {
                    "date": new Date(1991, 1, 1),
                    "value": 345015,
                    "value2": 0,
                    "value3": 266654,
                    "value4": 0,
                    "value5": 35242,
                    "value6": 0,
                }, {
                    "date": new Date(1992, 1, 1),
                    "value": 374155,
                    "value2": 0,
                    "value3": 297735,
                    "value4": 0,
                    "value5": 38351,
                    "value6": 0,
                }, {
                    "date": new Date(1993, 1, 1),
                    "value": 411869,
                    "value2": 132650,
                    "value3": 447067,
                    "value4": 0,
                    "value5": 50250,
                    "value6": 0,
                }, {
                    "date": new Date(1994, 1, 1),
                    "value": 442040,
                    "value2": 497314,
                    "value3": 634470,
                    "value4": 0,
                    "value5": 41842,
                    "value6": 0,
                }, {
                    "date": new Date(1995, 1, 1),
                    "value": 477508,
                    "value2": 393253,
                    "value3": 536682,
                    "value4": 0,
                    "value5": 47120,
                    "value6": 0,
                }, {
                    "date": new Date(1996, 1, 1),
                    "value": 559033,
                    "value2": 554756,
                    "value3": 468573,
                    "value4": 0,
                    "value5": 58427,
                    "value6": 0,
                }, {
                    "date": new Date(1997, 1, 1),
                    "value": 527525,
                    "value2": 510214,
                    "value3": 926445,
                    "value4": 0,
                    "value5": 82736,
                    "value6": 0,
                }, {
                    "date": new Date(1998, 1, 1),
                    "value": 484186,
                    "value2": 531583,
                    "value3": 1182012,
                    "value4": 0,
                    "value5": 79206,
                    "value6": 0,
                }, {
                    "date": new Date(1999, 1, 1),
                    "value": 505523,
                    "value2": 585911,
                    "value3": 460789,
                    "value4": 9048,
                    "value5": 72855,
                    "value6": 0,
                }, {
                    "date": new Date(2000, 1, 1),
                    "value": 537299,
                    "value2": 597319,
                    "value3": 261696,
                    "value4": 140356,
                    "value5": 89659,
                    "value6": 0,
                }, {
                    "date": new Date(2001, 1, 1),
                    "value": 506277,
                    "value2": 562137,
                    "value3": 436062,
                    "value4": 84715,
                    "value5": 108518,
                    "value6": 0,
                }, {
                    "date": new Date(2002, 1, 1),
                    "value": 539113,
                    "value2": 487236,
                    "value3": 255920,
                    "value4": 207994,
                    "value5": 100581,
                    "value6": 0,
                }, {
                    "date": new Date(2003, 1, 1),
                    "value": 558939,
                    "value2": 504901,
                    "value3": 297519,
                    "value4": 188141,
                    "value5": 106910,
                    "value6": 0,
                }, {
                    "date": new Date(2004, 1, 1),
                    "value": 546091,
                    "value2": 524257,
                    "value3": 353573,
                    "value4": 324636,
                    "value5": 108811,
                    "value6": 0,
                }, {
                    "date": new Date(2005, 1, 1),
                    "value": 362800,
                    "value2": 544625,
                    "value3": 979607,
                    "value4": 121622,
                    "value5": 58226,
                    "value6": 0,
                }, {
                    "date": new Date(2006, 1, 1),
                    "value": 557768,
                    "value2": 548842,
                    "value3": 461327,
                    "value4": 104599,
                    "value5": 48586,
                    "value6": 0,
                }, {
                    "date": new Date(2007, 1, 1),
                    "value": 585093,
                    "value2": 356700,
                    "value3": 920093,
                    "value4": 183793,
                    "value5": 45498,
                    "value6": 0,
                }, {
                    "date": new Date(2008, 1, 1),
                    "value": 667436,
                    "value2": 155169,
                    "value3": 456660,
                    "value4": 260991,
                    "value5": 73698,
                    "value6": 0,
                }, {
                    "date": new Date(2009, 1, 1),
                    "value": 646599,
                    "value2": 323460,
                    "value3": 641840,
                    "value4": 332801,
                    "value5": 76739,
                    "value6": 0,
                }, {
                    "date": new Date(2010, 1, 1),
                    "value": 690883,
                    "value2": 316100,
                    "value3": 818018,
                    "value4": 432822,
                    "value5": 67515,
                    "value6": 0,
                }, {
                    "date": new Date(2011, 1, 1),
                    "value": 753178,
                    "value2": 294843,
                    "value3": 951011,
                    "value4": 389619,
                    "value5": 64462,
                    "value6": 12672,
                }, {
                    "date": new Date(2012, 1, 1),
                    "value": 732696,
                    "value2": 299421,
                    "value3": 740968,
                    "value4": 483769,
                    "value5": 96893,
                    "value6": 29267,
                }, {
                    "date": new Date(2013, 1, 1),
                    "value": 805978,
                    "value2": 511465,
                    "value3": 755265,
                    "value4": 772106,
                    "value5": 54494,
                    "value6": 33660,
                }, {
                    "date": new Date(2014, 1, 1),
                    "value": 865051,
                    "value2": 519322,
                    "value3": 991265,
                    "value4": 361441,
                    "value5": 23615,
                    "value6": 34446,
                }, {
                    "date": new Date(2015, 1, 1),
                    "value": 775583,
                    "value2": 485521,
                    "value3": 995436,
                    "value4": 239039,
                    "value5": 0,
                    "value6": 40038,
                }, {
                    "date": new Date(2016, 1, 1),
                    "value": 741906,
                    "value2": 567250,
                    "value3": 989999,
                    "value4": 251428,
                    "value5": 67648,
                    "value6": 33000,
                }, {
                    "date": new Date(2017, 1, 1),
                    "value": 667311,
                    "value2": 447192,
                    "value3": 740776,
                    "value4": 310252,
                    "value5": 135175,
                    "value6": 23534,
                }, {
                    "date": new Date(2018, 1, 1),
                    "value": 600560,
                    "value2": 523343,
                    "value3": 820191,
                    "value4": 252085,
                    "value5": 58135,
                    "value6": 21750,
                }, {
                    "date": new Date(2019, 1, 1),
                    "value": 581378,
                    "value2": 580890,
                    "value3": 1023738,
                    "value4": 273868,
                    "value5": 51873,
                    "value6": 15500,
                }, {
                    "date": new Date(2020, 1, 1),
                    "value": 14061,
                    "value2": 155552,
                    "value3": 356284,
                    "value4": 130408,
                    "value5": 25120,
                    "value6": 2440,
                }, {
                    "date": new Date(2021, 1, 1),
                    "value": 308243,
                    "value2": 249794,
                    "value3": 394600,
                    "value4": 111647,
                    "value5": 35512,
                    "value6": 846,
                },];

                // Create axes
                var dateAxis = chart1.xAxes.push(new am4charts.DateAxis());
                dateAxis.renderer.grid.template.location = 0;
                dateAxis.renderer.minGridDistance = 30;
                var valueAxis = chart1.yAxes.push(new am4charts.ValueAxis());
                // Create series
                function createSeries0(field, name, zindex) {
                    var series = chart1.series.push(new am4charts.LineSeries());
                    series.dataFields.valueY = field;
                    series.dataFields.dateX = "date";
                    series.name = name;
                    series.tooltipText = "{name}: {valueY}";
                    series.strokeWidth = 2;
                    series.minBulletDistance = 20;
                    series.zIndex = zindex;
                    var bullet = series.bullets.push(new am4charts.CircleBullet());
                    bullet.circle.stroke = am4core.color("#fff");
                    bullet.circle.strokeWidth = 2;
                    return series;
                }
                createSeries0("value", "음악당", 1);
                createSeries0("value2", "오페라하우스", 1);
                createSeries0("value3", "한가람미술관", 1);
                createSeries0("value4", "한가람디자인미술관", 1);
                createSeries0("value5", "서울서예박물관", 1);
                createSeries0("value6", "특별무대(야외무대)", 1);
                chart1.legend = new am4charts.Legend();
                chart1.cursor = new am4charts.XYCursor();
                // Create chart instance
                var chart2 = am4core.create("chart02", am4charts.XYChart);
                // Add data
                chart2.data = [{
                    "date": new Date(1988, 1, 1),
                    "value": 287647,
                }, {
                    "date": new Date(1989, 1, 1),
                    "value": 287647,
                }, {
                    "date": new Date(1990, 1, 1),
                    "value": 369279,
                }, {
                    "date": new Date(1991, 1, 1),
                    "value": 646911,
                }, {
                    "date": new Date(1992, 1, 1),
                    "value": 710241,
                }, {
                    "date": new Date(1993, 1, 1),
                    "value": 1150886,
                }, {
                    "date": new Date(1994, 1, 1),
                    "value": 1724716,
                }, {
                    "date": new Date(1995, 1, 1),
                    "value": 1502733,
                }, {
                    "date": new Date(1996, 1, 1),
                    "value": 1582362,
                }, {
                    "date": new Date(1997, 1, 1),
                    "value": 2082020,
                }, {
                    "date": new Date(1998, 1, 1),
                    "value": 2323237,
                }, {
                    "date": new Date(1999, 1, 1),
                    "value": 1795324,
                }, {
                    "date": new Date(2000, 1, 1),
                    "value": 1710728,
                }, {
                    "date": new Date(2001, 1, 1),
                    "value": 1724085,
                }, {
                    "date": new Date(2002, 1, 1),
                    "value": 1480561,
                }, {
                    "date": new Date(2003, 1, 1),
                    "value": 1756410,
                }, {
                    "date": new Date(2004, 1, 1),
                    "value": 2007368,
                }, {
                    "date": new Date(2005, 1, 1),
                    "value": 2216880,
                }, {
                    "date": new Date(2006, 1, 1),
                    "value": 1721122,
                }, {
                    "date": new Date(2007, 1, 1),
                    "value": 2091177,
                }, {
                    "date": new Date(2008, 1, 1),
                    "value": 1639374,
                }, {
                    "date": new Date(2009, 1, 1),
                    "value": 2021436,
                }, {
                    "date": new Date(2010, 1, 1),
                    "value": 2325338,
                }, {
                    "date": new Date(2011, 1, 1),
                    "value": 2465785,
                }, {
                    "date": new Date(2012, 1, 1),
                    "value": 2383014,
                }, {
                    "date": new Date(2013, 1, 1),
                    "value": 2932968,
                }, {
                    "date": new Date(2014, 1, 1),
                    "value": 2795140,
                }, {
                    "date": new Date(2015, 1, 1),
                    "value": 2535617,
                }, {
                    "date": new Date(2016, 1, 1),
                    "value": 2651231,
                }, {
                    "date": new Date(2017, 1, 1),
                    "value": 2324240,
                }, {
                    "date": new Date(2018, 1, 1),
                    "value": 2276064,
                }, {
                    "date": new Date(2019, 1, 1),
                    "value": 2527247,
                }, {
                    "date": new Date(2020, 1, 1),
                    "value": 810420,
                }, {
                    "date": new Date(2021, 1, 1),
                    "value": 1100642,
                },];

                // Create axes
                var dateAxis = chart2.xAxes.push(new am4charts.DateAxis());
                dateAxis.renderer.grid.template.location = 0;
                dateAxis.renderer.minGridDistance = 30;
                var valueAxis = chart2.yAxes.push(new am4charts.ValueAxis());
                // Create series
                function createSeries1(field, name, zindex) {
                    var series = chart2.series.push(new am4charts.LineSeries());
                    series.dataFields.valueY = field;
                    series.dataFields.dateX = "date";
                    series.name = name;
                    series.tooltipText = "[b]{valueY}[/]";
                    series.fillOpacity = 0.2;
                    series.strokeWidth = 0.2;
                    series.zIndex = zindex;
                    var bullet = series.bullets.push(new am4charts.CircleBullet());
                    bullet.circle.stroke = am4core.color("#fff");
                    bullet.circle.strokeWidth = 2;
                    return series;
                }
                createSeries1("value", "Series #1", 1);
                createSeries1("value2", "Series #2", 1);
                createSeries1("value3", "Series #3", 1);
                chart2.cursor = new am4charts.XYCursor();

                var chart3 = am4core.create("chart03", am4charts.XYChart);
                // Add data
                chart3.data = [
                    {
                        "year": "음악당",
                        "2020 기획": 11,
                        "2020 대관": 89,
                        "2021 기획": 9,
                        "2021 대관": 91,
                    }, {
                        "year": "오페라하우스",
                        "2020 기획": 25,
                        "2020 대관": 75,
                        "2021 기획": 26,
                        "2021 대관": 74,
                    }, {
                        "year": "특별무대",
                        "2020 기획": 94,
                        "2020 대관": 6,
                        "2021 기획": 100,
                        "2021 대관": 0,
                    }, {
                        "year": "한가람미술관",
                        "2020 기획": 51,
                        "2020 대관": 49,
                        "2021 기획": 10,
                        "2021 대관": 90,
                    }, {
                        "year": "한가람디자인미술관",
                        "2020 기획": 37,
                        "2020 대관": 63,
                        "2021 기획": 26,
                        "2021 대관": 74,
                    }, {
                        "year": "서울서예박물관",
                        "2020 기획": 100,
                        "2020 대관": 0,
                        "2021 기획": 32,
                        "2021 대관": 68,
                    }
                ];
                // Create axes
                var categoryAxis = chart3.xAxes.push(new am4charts.CategoryAxis());
                categoryAxis.dataFields.category = "year";
                categoryAxis.renderer.grid.template.location = 0;
                categoryAxis.renderer.minGridDistance = 20;
                categoryAxis.renderer.cellStartLocation = 0.1;
                categoryAxis.renderer.cellEndLocation = 0.9;
                var valueAxis = chart3.yAxes.push(new am4charts.ValueAxis());
                valueAxis.min = 0;
                valueAxis.max = 100;
                // Create series
                function createSeries(field, name, stacked) {
                    var series = chart3.series.push(new am4charts.ColumnSeries());
                    series.dataFields.valueY = field;
                    series.dataFields.categoryX = "year";
                    series.name = name;
                    series.columns.template.tooltipText = "{name}: [bold]{valueY}%[/]";
                    series.stacked = stacked;
                    series.columns.template.width = am4core.percent(30);

                    var bullet1 = series.bullets.push(new am4charts.LabelBullet());
                    bullet1.interactionsEnabled = false;
                    bullet1.label.text = "{valueY}%";
                    bullet1.label.truncate = false;
                    // bullet1.label.rotation = 90;
                    bullet1.label.hideOversized = false;
                    bullet1.label.fill = am4core.color("#333");
                    bullet1.locationY = 0.4;
                }
                chart3.responsive.enabled = true;
                chart3.responsive.rules.push({
                    relevant: function (target) {
                        if (target.pixelWidth <= 800) {
                            categoryAxis.renderer.labels.template.wrap = true;
                            categoryAxis.renderer.labels.template.maxWidth = 60;
                            return true;
                        }
                        return false;
                    }
                });
                createSeries("2020 기획", "2020 기획", false);
                createSeries("2020 대관", "2020 대관", true);
                createSeries("2021 기획", "2021 기획", false);
                createSeries("2021 대관", "2021 대관", true);
                // Add legend
                chart3.legend = new am4charts.Legend();
            } else if (index == 3) {
                //수입 차트
                var chart4 = am4core.create("chart04", am4charts.PieChart);
                chart4.data = [{
                    "category": "국고보조금 Government Grants",
                    "value": 29.4
                }, {
                    "category": "예술사업수입 Arts Programs",
                    "value": 20.6
                }, {
                    "category": "부대사업수입 Subsidiary Business",
                    "value": 9.4
                }, {
                    "category": "대관사업수입 Venue",
                    "value": 28.2
                }, {
                    "category": "임대사업수입 Subsidiary Business",
                    "value": 11.0
                }, {
                    "category": "기타수입 Other Income",
                    "value": 1.5
                }];
                var pieSeries = chart4.series.push(new am4charts.PieSeries());
                pieSeries.dataFields.value = "value";
                pieSeries.dataFields.category = "category";
                pieSeries.labels.template.wrap = true;
                pieSeries.hiddenState.properties.opacity = 1;
                pieSeries.hiddenState.properties.endAngle = -90;
                pieSeries.hiddenState.properties.startAngle = -90;
                chart4.innerRadius = am4core.percent(50);
                chart4.responsive.enabled = true;
                chart4.responsive.rules.push({
                    relevant: function (target) {
                        if (target.pixelWidth <= 690) {
                            pieSeries.labels.template.maxWidth = 120;
                            chart4.radius = am4core.percent(30);
                            chart4.innerRadius = am4core.percent(45);
                            return true;
                        } else {
                            pieSeries.labels.template.maxWidth = 130;
                            chart4.radius = am4core.percent(80);
                            chart4.innerRadius = am4core.percent(50);
                        }
                        return false;
                    }
                });

                // 예술사업 수입 차트
                var chart5 = am4core.create("chart05", am4charts.PieChart);
                chart5.data = [{
                    "category": "공연사업수입 Music & Performing Arts",
                    "value": 44.6
                }, {
                    "category": "전시사업수입 Visual Arts",
                    "value": 0.8
                }, {
                    "category": "교육사업수입 Arts Academy",
                    "value": 20.0
                }];
                var pieSeries = chart5.series.push(new am4charts.PieSeries());
                pieSeries.dataFields.value = "value";
                pieSeries.dataFields.category = "category";
                pieSeries.labels.template.wrap = true;
                pieSeries.hiddenState.properties.opacity = 1;
                pieSeries.hiddenState.properties.endAngle = -90;
                pieSeries.hiddenState.properties.startAngle = -90;
                chart5.innerRadius = am4core.percent(50);
                chart5.responsive.enabled = true;
                chart5.responsive.rules.push({
                    relevant: function (target) {
                        if (target.pixelWidth <= 690) {
                            pieSeries.labels.template.maxWidth = 100;
                            chart5.radius = am4core.percent(30);
                            chart5.innerRadius = am4core.percent(45);
                            return true;
                        } else {
                            pieSeries.labels.template.maxWidth = 130;
                            chart5.radius = am4core.percent(80);
                            chart5.innerRadius = am4core.percent(50);
                        }
                        return false;
                    }
                });
            } else if (index == 4) {
                // 지출 차트
                var chart6 = am4core.create("chart06", am4charts.PieChart);
                chart6.data = [{
                    "category": "예술사업비 Arts Programs",
                    "value": 17.3
                }, {
                    "category": "부대사업비 Subsidiary Business",
                    "value": 4.7
                }, {
                    "category": "대관사업비 Venue",
                    "value": 4.2
                }, {
                    "category": "관리운영비 Ordinary Operating Expenses",
                    "value": 22.1
                }, {
                    "category": "경상운영비 Administration",
                    "value": 31.1
                }, {
                    "category": "공간유지비 Maintenance and Utilities",
                    "value": 20.3
                }];
                var pieSeries = chart6.series.push(new am4charts.PieSeries());
                pieSeries.dataFields.value = "value";
                pieSeries.dataFields.category = "category";
                pieSeries.labels.template.wrap = true;
                pieSeries.hiddenState.properties.opacity = 1;
                pieSeries.hiddenState.properties.endAngle = -90;
                pieSeries.hiddenState.properties.startAngle = -90;
                chart6.responsive.enabled = true;
                chart6.innerRadius = am4core.percent(50);
                chart6.responsive.rules.push({
                    relevant: function (target) {
                        if (target.pixelWidth <= 690) {
                            pieSeries.labels.template.maxWidth = 120;
                            chart6.radius = am4core.percent(30);
                            chart6.innerRadius = am4core.percent(45);
                            return true;
                        } else {
                            pieSeries.labels.template.maxWidth = 130;
                            chart6.radius = am4core.percent(80);
                            chart6.innerRadius = am4core.percent(50);
                        }
                        return false;
                    }
                });
                // 예술사업비 차트
                var chart7 = am4core.create("chart07", am4charts.PieChart);
                chart7.data = [{
                    "category": "공연사업비 Music & Performing Arts",
                    "value": 78.6
                }, {
                    "category": "전시사업비 Visual Arts",
                    "value": 5.7
                }, {
                    "category": "교육사업비 Arts Academy",
                    "value": 15.7
                }];
                var pieSeries = chart7.series.push(new am4charts.PieSeries());
                pieSeries.dataFields.value = "value";
                pieSeries.dataFields.category = "category";
                pieSeries.labels.template.wrap = true;
                pieSeries.hiddenState.properties.opacity = 1;
                pieSeries.hiddenState.properties.endAngle = -90;
                pieSeries.hiddenState.properties.startAngle = -90;
                chart7.innerRadius = am4core.percent(50);
                chart7.responsive.enabled = true;
                chart7.responsive.rules.push({
                    relevant: function (target) {
                        if (target.pixelWidth <= 690) {
                            pieSeries.labels.template.maxWidth = 100;
                            chart7.radius = am4core.percent(30);
                            chart7.innerRadius = am4core.percent(45);
                            return true;
                        } else {
                            pieSeries.labels.template.maxWidth = 130;
                            chart7.radius = am4core.percent(80);
                            chart7.innerRadius = am4core.percent(50);
                        }
                        return false;
                    }
                });
            }
        }
    });

    var paginationH = $('.pagination1').height();
    $('.pagination1').css({
        'margin-top': -paginationH / 2
    });

    
    var interval = 4000;
    $('.imgfade').each(function(){
        var container = $(this);
        function switchImg(){
            var imgs = container.find('div');
            var first = imgs.eq(0);
            var second = imgs.eq(1);
            first.fadeOut(2000).appendTo(container);
            second.fadeIn(2000);
        }
        setInterval(switchImg, interval);
    });

    

    // 아코디언 메뉴
    $(".que").click(function () {
        $(this).next(".anw").stop().slideToggle(300);
        $(this).toggleClass('on').siblings().removeClass('on');
        $(this).next(".anw").siblings(".anw").slideUp(300); // 1개씩 펼치기
    });

    // 표 팝업
    $('.popup_btn').click(function () {
        $(this).next('.popup_area').fadeToggle();
        return false;
    });
    $('.close_btn').click(function () {
        $(this).parent('.popup_area').fadeToggle();
        return false;
    });

    // [s] scroll var
    $.fn.extend({
        mouse_wheel: function () {
            $(this).on('mousewheel', function (e) {
                if (e.originalEvent.wheelDelta >= 120) {
                    this.scrollTop -= 50;
                } else if (e.originalEvent.wheelDelta <= -120) {
                    this.scrollTop += 50;
                }
                return false;
            });
        }

    });
    $('.txt_cont').mouse_wheel();
    // [e] scroll var
});

//재무상태표 이동
let cont04_6 = document.querySelector('#cont04_6');
let cont04_6_inner1 = document.querySelector('#cont04_6_inner1');
let cont04_6_inner2 = document.querySelector('#cont04_6_inner2');
if (matchMedia("screen and (min-width: 768px)").matches) {
    cont04_6_inner1.appendChild(cont04_6_inner2);
} else {
    cont04_6.appendChild(cont04_6_inner2);
};

let cont01 = document.getElementById('cont01');
let url1 = '../html/cont01.html';
            fetch(url1)
            .then( res => {
                res.text().then(text => {
                    cont01.insertAdjacentHTML('beforeend', text)
                })
            });