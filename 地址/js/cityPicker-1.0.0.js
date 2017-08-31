(function ($, window) {
    var $selector;
    var grade = ['province', 'city', 'district'];
    var defaults = {
        dataJson: null,
        selectpattern: [
            {
            field: 'userProvinceId',
            placeholder: '请选择'
            },
            {
                field: 'userCityId',
                placeholder: '请选择'
            },
            {
                field: 'userDistrictId',
                placeholder: '请选择'
            }
        ],
        shorthand: false,
        storage: true,
        linkage: true,
        level: 3,
    };

    function Citypicker(options, selector) {
        this.options = $.extend({}, defaults, options);
        this.$selector = $selector = $(selector);
        this.init();
        this.events();
    }

    //功能模块函数
    var effect = {
        montage: function (data, pid, reg) {
            var self = this,
                config = self.options,
                leng = data.length,
                html = '',
                name, reverse, storage;

            for (var i = 0; i < leng; i++) {
                if (data[i].parentId === pid) {
                    name = data[i].shortName;
                    reverse = data[i].name;
                    storage = data[i].id;
                    html += '<option class="caller" value="' + storage + '" data-title="' + reverse + '">' + name + '</option>';
                }
            }
            return html;
        },
        seTemplet: function () {
            var config = this.options,
                selectemplet = '',
                placeholder, field,  citygrade, 
                searchStr =  '',
                text = ['省','市区','区/县'];

            for (var i = 0; i < config.level; i++) { //循环定义的级别
                placeholder = config.selectpattern[i].placeholder; //默认提示语
                field = config.selectpattern[i].field; //字段名称
                citygrade = grade[i]; //城市级别名称

                selectemplet += '<select name="' + field + '" data-index="' + i + '" class="' + citygrade + '"><option>' + placeholder + '</option></select>'+text[i];
            }
            return selectemplet;
        },
        obtain: function (event) {
            var self = this,
                config = self.options,
                $target = $(event.target),
                $parent = $target.parents('.listing'),
                index = $target.data('index'),
                id =  $target.val(),
                placeholder = index+1 < config.level ? config.selectpattern[index+1].placeholder : '',
                placeStr = '<option class="caller">'+placeholder+'</option>'+ effect.montage.apply(self, [config.dataJson, id]) ,
                linkage =  placeStr,
                $storey = $selector.find('.storey').eq(index + 1),
                $listing = $selector.find('.listing').eq(index + 1);
            $selector = self.$selector;
            $target.next().html(linkage);
        },
        hide: function (event) {
            var config = this.options,
                $target = $(event);
            effect.obtain.apply(this, $target);
            $selector.find('.listing').addClass('hide');
        },
    };

    Citypicker.prototype = {
        init: function () {
            var self = this,
                config = self.options;
            $selector.html(effect.seTemplet.call(self));
            $selector.find('.province').append(effect.montage.apply(self, [config.dataJson, '100000']));
        },
        events: function () {
            var self = this,
                config = self.options;
            $selector.on('change.citypicker', 'select', $.proxy(effect.obtain, self));

        },
    };

    $.fn.cityPicker = function (options) {
        return new Citypicker(options, this);
    };

})(jQuery, window);
