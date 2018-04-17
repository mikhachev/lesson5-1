ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map(map, {
            center [55.76, 37.64],
            zoom 10
        }, {
            searchControlProvider 'yandex#search'
        }),

     ������� ��������� � ����� ��������� �����.
        myGeoObject = new ymaps.GeoObject({
             �������� ���������.
            geometry {
                type Point,
                coordinates [55.8, 37.8]
            },
             ��������.
            properties {
                 ������� �����.
                iconContent '� ������',
                hintContent '�� ����� ��� ����'
            }
        }, {
             �����.
             ������ ����� ����� ������������� ��� ������ �� �����������.
            preset 'islands#blackStretchyIcon',
             ����� ����� ����������.
            draggable true
        }),
        myPieChart = new ymaps.Placemark([
            55.847, 37.6
        ], {
             ������ ��� ���������� ���������.
            data [
                {weight 8, color '#0E4779'},
                {weight 6, color '#1E98FF'},
                {weight 4, color '#82CDFF'}
            ],
            iconCaption ���������
        }, {
             ������� ������������ ����� �����.
            iconLayout 'default#pieChart',
             ������ ��������� � ��������.
            iconPieChartRadius 30,
             ������ ����������� ����� ������.
            iconPieChartCoreRadius 10,
             ����� ������� ����������� �����.
            iconPieChartCoreFillStyle '#ffffff',
             C���� �����-������������ �������� � ������� ������� ���������.
            iconPieChartStrokeStyle '#ffffff',
             ������ �����-������������ �������� � ������� ������� ���������.
            iconPieChartStrokeWidth 3,
             ������������ ������ ������� �����.
            iconPieChartCaptionMaxWidth 200
        });

    myMap.geoObjects
        .add(myGeoObject)
        .add(myPieChart)
        .add(new ymaps.Placemark([55.684758, 37.738521], {
            balloonContent '���� strong���� ����� �����strong'
        }, {
            preset 'islands#icon',
            iconColor '#0095b6'
        }))
        .add(new ymaps.Placemark([55.833436, 37.715175], {
            balloonContent 'strong�����������������strong ����'
        }, {
            preset 'islands#dotIcon',
            iconColor '#735184'
        }))
        .add(new ymaps.Placemark([55.687086, 37.529789], {
            balloonContent '���� strong���������� ����strong'
        }, {
            preset 'islands#circleIcon',
            iconColor '#3caa3c'
        }))
        .add(new ymaps.Placemark([55.782392, 37.614924], {
            balloonContent '���� strong������� �������������strong'
        }, {
            preset 'islands#circleDotIcon',
            iconColor 'yellow'
        }))
        .add(new ymaps.Placemark([55.642063, 37.656123], {
            balloonContent '���� strong�������strong'
        }, {
            preset 'islands#redSportIcon'
        }))
        .add(new ymaps.Placemark([55.826479, 37.487208], {
            balloonContent '���� strong��������strong'
        }, {
            preset 'islands#governmentCircleIcon',
            iconColor '#3b5998'
        }))
        .add(new ymaps.Placemark([55.694843, 37.435023], {
            balloonContent '���� strong������ ����strong',
            iconCaption '����� ��������, �� ���������� ���������� �����'
        }, {
            preset 'islands#greenDotIconWithCaption'
        }))
        .add(new ymaps.Placemark([55.790139, 37.814052], {
            balloonContent '���� strong�������strong',
            iconCaption '����� ��������, �� ���������� ���������� �����'
        }, {
            preset 'islands#blueCircleDotIconWithCaption',
            iconCaptionMaxWidth '50'
        }));
}
