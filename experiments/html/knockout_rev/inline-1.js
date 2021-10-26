function KnockoutViewModel() {
        this.button_click = function() {
            event_handler();
        };
        this.button_text = 'knockout_data_bind'
    }
    ko.applyBindings(new KnockoutViewModel());