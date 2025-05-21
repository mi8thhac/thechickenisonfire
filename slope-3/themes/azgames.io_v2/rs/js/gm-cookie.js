class GMCookie {
    cookie_name = "cookie_game";
    cookie_permission = "cookie_permission";
    permisstion = false;
    expires = { expires: 90, path: '/' };
    limit = 12;
    //init to using cookie
    init() {
        if (Cookies.get(this.cookie_permission)) {
            return this;
        } else {
            return false;
        }
    }
    //get permission to using cookie
    getPermision() {
        if (Cookies.get(this.cookie_permission) == 'true') {
            return true
        } else {
            return false;
        }
    }
    //set permission using cookie
    setPermisstion(permission) {
        this.permisstion = permission;
        return Cookies.set(this.cookie_permission, this.permisstion, this.expires);
    }
    //save data game to cookie
    write(obj) {
        if (!this.getPermision()) {
            return;
        }

        if (typeof obj !== 'object') {
            return;
        }
        let data_cookie = this.read();
        let array_cookie = [];
        if (data_cookie) {
            array_cookie = JSON.parse(data_cookie);
            let add = true;
            for (let temp of array_cookie) {
                if (obj.slug == temp.slug || obj.slug == slug_home) {
                    add = false;
                    return;
                }
            }
            if (add) {
                array_cookie.push(obj);
            }
            if (array_cookie.length > this.limit) {
                array_cookie = array_cookie.slice(Math.max(array_cookie.length - this.limit, 0))
            }
        } else {
            array_cookie.push(obj);
        }

        let json_cookie = JSON.stringify(array_cookie);
        Cookies.set(this.cookie_name, json_cookie, this.expires);
    }
    //read data from cookie
    read(cc_name = null) {
        if (!this.getPermision()) {
            return false;
        }
        return Cookies.get(this.cookie_name);
    }
    //remove all cookie
    clear(cookie_name) {
        this.setPermisstion(false);
        localStorage.clear();
        if (cookie_name) {
            return Cookies.remove(cookie_name);
        } else {
            return Cookies.remove(this.cookie_name);
        }
    }
    //render to html and show for user.
    render(data = null, flag = true) {
        if (!this.getPermision()) {
            return;
        }
        if (!data) {
            data = this.read();
        }
        let data_game = JSON.parse(data).reverse();
        this.html(data_game, flag);
    }

    html(data_recent, flag = true) {
        $(".layer-loading").removeClass('hidden');
        if (!data_recent) {
            return false;
        }
        let url = "/recent.ajax";
        $.ajax({
            url: url,
            type: "POST",
            data: { data_recent: data_recent },
            success: function (html) {
                $(".layer-loading").addClass('hidden');
                let data_html = JSON.parse(html);
                $("#game-page").html(data_html.content);
            }
        })
    }

    accpet() {
        this.permisstion = true;
        this.setPermisstion(this.permisstion);
    }

    reject() {
        this.permisstion = false;
        this.setPermisstion(this.permisstion);
    }
}
