"use strict";
(self.webpackChunkKCCSocial = self.webpackChunkKCCSocial || []).push([
  [238],
  {
    238: (Y, m, a) => {
      a.r(m), a.d(m, { ExplorePageModule: () => W });
      var _ = a(9808),
        P = a(8320),
        h = a(7739),
        C = a(8016),
        f = a(2888),
        M = a(3340),
        x = a(1966),
        n = a(5e3),
        O = a(2313),
        u = a(773),
        b = a(162);
      const w = ["widthReferenceContainer"],
        v = ["userSearchInput"];
      function y(e, r) {
        1 & e &&
          (n.TgZ(0, "div", 17),
          n._UZ(1, "div")(2, "div")(3, "div")(4, "div")(5, "div")(6, "div")(
            7,
            "div"
          )(8, "div")(9, "div")(10, "div"),
          n.qZA());
      }
      function k(e, r) {
        1 & e && (n.TgZ(0, "span", 18), n._uU(1, "close"), n.qZA());
      }
      function z(e, r) {
        if ((1 & e && n._UZ(0, "h4", 28), 2 & e)) {
          const t = n.oxw().$implicit;
          n.Q6J("innerHTML", t.highlightedWalletString, n.oJD);
        }
      }
      function S(e, r) {
        if (
          (1 & e && (n.TgZ(0, "div", 33), n._UZ(1, "img", 34), n.qZA()), 2 & e)
        ) {
          const t = r.$implicit;
          n.xp6(1),
            n.s9C("src", t.image, n.LSH),
            n.MGl("alt", "", t.title, " Icon");
        }
      }
      function T(e, r) {
        if (
          (1 & e && (n.TgZ(0, "div", 33)(1, "span"), n._uU(2), n.qZA()()),
          2 & e)
        ) {
          const t = n.oxw(2).$implicit,
            o = n.oxw();
          n.xp6(2), n.hij("+", t.badges.length - (o.badgeLimiter - 1), "");
        }
      }
      function E(e, r) {
        if (
          (1 & e &&
            (n.TgZ(0, "div", 29)(1, "div", 30),
            n.YNc(2, S, 2, 2, "div", 31),
            n.YNc(3, T, 3, 1, "div", 32),
            n.qZA()()),
          2 & e)
        ) {
          const t = n.oxw().$implicit,
            o = n.oxw();
          n.xp6(2),
            n.Q6J("ngForOf", o.reduceBadges(t)),
            n.xp6(1),
            n.Q6J("ngIf", t.badges.length > o.badgeLimiter);
        }
      }
      const F = function (e) {
        return { center: e };
      };
      function Z(e, r) {
        if (1 & e) {
          const t = n.EpF();
          n.TgZ(0, "a", 19),
            n.NdJ("click", function (i) {
              const l = n.CHM(t).$implicit;
              return n.oxw().openProfile(i, l);
            }),
            n._UZ(1, "div", 20)(2, "div", 21),
            n.TgZ(3, "div", 22),
            n._UZ(4, "img", 23),
            n.TgZ(5, "div", 24)(6, "h3")(7, "span"),
            n._uU(8, "@"),
            n.qZA(),
            n._uU(9),
            n.qZA(),
            n._UZ(10, "div", 25),
            n.YNc(11, z, 1, 1, "h4", 26),
            n.YNc(12, E, 4, 2, "div", 27),
            n.qZA()()();
        }
        if (2 & e) {
          const t = r.$implicit;
          n.MGl("href", "/p/", t.username, "", n.LSH),
            n.xp6(1),
            n.Udp("background", t.background.background)(
              "filter",
              t.background.filter
            ),
            n.xp6(3),
            n.Q6J("src", t.avatar.url, n.LSH),
            n.xp6(1),
            n.Tol(n.VKq(11, F, !t.showWallet || 0 == t.badges.length)),
            n.xp6(4),
            n.Oqu(t.username),
            n.xp6(2),
            n.Q6J("ngIf", 1 == t.showWallet),
            n.xp6(1),
            n.Q6J("ngIf", t.badges.length > 0);
        }
      }
      function I(e, r) {
        1 & e && n._UZ(0, "div", 33);
      }
      function A(e, r) {
        if (
          (1 & e &&
            (n.TgZ(0, "a", 35)(1, "div", 22),
            n._UZ(2, "div", 36),
            n.TgZ(3, "div", 24)(4, "h3", 37),
            n._uU(5, "USERNAME"),
            n.qZA(),
            n.TgZ(6, "h4", 38),
            n._uU(7, "0x0000000000000000000000000000000000000000"),
            n.qZA(),
            n.TgZ(8, "div", 29)(9, "div", 30),
            n.YNc(10, I, 1, 0, "div", 31),
            n.qZA()()()()()),
          2 & e)
        ) {
          const t = n.oxw();
          n.xp6(10), n.Q6J("ngForOf", t.loadingElementsBadges);
        }
      }
      function L(e, r) {
        1 & e &&
          (n.TgZ(0, "h3", 39),
          n._uU(1, "There are no results for your query."),
          n.qZA());
      }
      function R(e, r) {
        if (1 & e) {
          const t = n.EpF();
          n.TgZ(0, "button", 40),
            n.NdJ("click", function () {
              return n.CHM(t), n.oxw().loadMore();
            }),
            n._uU(1, "Load More"),
            n.qZA();
        }
      }
      function N(e, r) {
        1 & e && n._UZ(0, "mat-spinner", 41);
      }
      const H = [
        {
          path: "**",
          component: (() => {
            class e {
              constructor(t, o, i) {
                (this.titleService = t),
                  (this.router = o),
                  (this.route = i),
                  (this.searchResults = []),
                  (this.loadingElements = [0, 1, 2, 3, 4, 5, 6, 7]),
                  (this.loadingElementsBadges = [1, 2, 3, 4]),
                  (this.searchTimeout = void 0),
                  (this.isSearching = !1),
                  (this.hasSearched = !1),
                  (this.moreResultsPossible = !1),
                  (this.isLoading = !1),
                  (this.lastLoadOffset = 0),
                  (this.lastLoadWasExplore = !0),
                  (this.badgeLimiter = 6),
                  (this.randomInputName = Math.random()
                    .toString(36)
                    .replace(/[^a-z]+/g, "")
                    .substring(0, 5)),
                  (this.badgeLimiter =
                    window.innerWidth < 420
                      ? Math.floor((window.innerWidth - 150) / 37)
                      : window.innerWidth < 1100
                      ? 7
                      : 10);
              }
              ngAfterViewInit() {
                (f.t.Singleton.scrollElement = void 0),
                  (f.t.Singleton.highlightBarItem = "Explore"),
                  (f.t.Singleton.scrollbarWidth =
                    window.innerWidth -
                    this.widthReferenceContainer.nativeElement.getBoundingClientRect()
                      .width),
                  f.t.Singleton.UpdateHeader(!1),
                  this.titleService.setTitle("Nogi - Explore"),
                  this.route.queryParams.subscribe((t) => {
                    null != t.s && t.s.length > 0
                      ? (this._executeSearch(t.s),
                        this.userSearchInput.nativeElement.setAttribute(
                          "value",
                          t.s
                        ))
                      : this.resetToPopular();
                  });
              }
              resetToPopular() {
                x.tr.Instance.getExploreUsers(0, (t, o) => {
                  this._handleServerSearchResult(t, o, void 0, 0);
                });
              }
              onResize(t) {
                (f.t.Singleton.scrollbarWidth =
                  window.innerWidth -
                  this.widthReferenceContainer.nativeElement.getBoundingClientRect()
                    .width),
                  (this.badgeLimiter =
                    window.innerWidth < 420
                      ? Math.floor((window.innerWidth - 150) / 37)
                      : window.innerWidth < 1100
                      ? 7
                      : 10);
              }
              openProfile(t, o) {
                t.preventDefault(), this.router.navigate(["p/" + o.username]);
              }
              clearSearch() {
                this.userSearchInput.nativeElement.value.length > 0 &&
                  ((this.userSearchInput.nativeElement.value = ""),
                  null != this.searchTimeout &&
                    clearTimeout(this.searchTimeout),
                  (this.searchResults = []),
                  (this.isSearching = !1),
                  (this.hasSearched = !1),
                  this.resetToPopular(),
                  this.router.navigate(["/explore"]));
              }
              _searchFailed() {
                this.isSearching = !1;
              }
              _handleServerSearchResult(t, o, i, g) {
                if (
                  ((this.loadingElements = []),
                  (this.lastLoadOffset = g),
                  (this.lastLoadWasExplore = null == i),
                  (this.lastSearchString = i),
                  !t)
                )
                  return (
                    (this.moreResultsPossible = !1), void this._searchFailed()
                  );
                (this.hasSearched = !this.lastLoadWasExplore),
                  (this.isSearching = !1),
                  0 == g && (this.searchResults = []);
                for (var l = 0; l < o.length; l++) {
                  let s = new M.x(o[l], !0);
                  if (null != s.showWallet) {
                    let c = C.Kn(s.walletAddress);
                    if (null == i) s.highlightedWalletString = c;
                    else {
                      let d = c.toLowerCase().indexOf(i.toLowerCase());
                      if (d >= 0) {
                        let p = "";
                        d > 0 && (p = c.slice(0, d)),
                          (p += "<b>"),
                          (p += c.slice(d, d + i.length)),
                          (p += "</b>"),
                          d + i.length < c.length &&
                            (p += c.slice(d + i.length, c.length)),
                          (s.highlightedWalletString = p);
                      } else s.highlightedWalletString = c;
                    }
                  }
                  this.searchResults.push(s);
                }
                this.moreResultsPossible = 10 == o.length;
              }
              _executeSearch(t) {
                if ((t.startsWith("@") && (t = t.slice(1)), "" == t))
                  return (
                    (this.searchResults = []),
                    (this.isSearching = !1),
                    (this.hasSearched = !1),
                    void this.resetToPopular()
                  );
                (this.searchTimeout = void 0),
                  x.tr.Instance.searchUsers(t, 10, 0, (o, i) => {
                    this._handleServerSearchResult(o, i, t, 0);
                  });
              }
              search(t) {
                (this.isSearching = !0),
                  null != this.searchTimeout &&
                    clearTimeout(this.searchTimeout);
                let o = t.target.value,
                  i = this;
                this.searchTimeout = setTimeout(() => i._executeSearch(o), 250);
              }
              loadMore() {
                var t;
                if (!this.isLoading)
                  if (((this.isLoading = !0), this.lastLoadWasExplore)) {
                    let o = this.lastLoadOffset + 1;
                    x.tr.Instance.getExploreUsers(o, (i, g) => {
                      (this.isLoading = !1),
                        this._handleServerSearchResult(i, g, void 0, o);
                    });
                  } else {
                    let o = this.lastLoadOffset + 10,
                      i =
                        null !== (t = this.lastSearchString) && void 0 !== t
                          ? t
                          : "";
                    x.tr.Instance.searchUsers(i, 10, o, (g, l) => {
                      (this.isLoading = !1),
                        this._handleServerSearchResult(g, l, i, o);
                    });
                  }
              }
              reduceBadges(t) {
                return t.badges.length < this.badgeLimiter
                  ? t.badges
                  : t.badges.slice(
                      0,
                      t.badges.length < this.badgeLimiter + 1
                        ? this.badgeLimiter
                        : this.badgeLimiter - 1
                    );
              }
            }
            return (
              (e.ɵfac = function (t) {
                return new (t || e)(n.Y36(O.Dx), n.Y36(h.F0), n.Y36(h.gz));
              }),
              (e.ɵcmp = n.Xpm({
                type: e,
                selectors: [["explore"]],
                viewQuery: function (t, o) {
                  if ((1 & t && (n.Gf(w, 5), n.Gf(v, 5)), 2 & t)) {
                    let i;
                    n.iGM((i = n.CRH())) &&
                      (o.widthReferenceContainer = i.first),
                      n.iGM((i = n.CRH())) && (o.userSearchInput = i.first);
                  }
                },
                decls: 21,
                vars: 8,
                consts: [
                  [1, "front-page", 3, "resize"],
                  ["mainContainer", ""],
                  [
                    1,
                    "flex",
                    "f-col",
                    2,
                    "width",
                    "100%",
                    "min-height",
                    "calc(100% - 52px)",
                    "transition",
                    "background 0.25s",
                  ],
                  ["widthReferenceContainer", ""],
                  [
                    1,
                    "centered",
                    "text-page",
                    "flex",
                    "f-col",
                    "explore-page",
                    2,
                    "min-height",
                    "calc(100vh - 52px - 200px - 240px)",
                  ],
                  [1, "flex", "f-row", "searchbar", "rel"],
                  [
                    1,
                    "material-icons",
                    2,
                    "align-self",
                    "center",
                    "color",
                    "#e18e5b",
                  ],
                  [
                    "autocomplete",
                    "false",
                    "spellcheck",
                    "false",
                    "placeholder",
                    "Search for profiles...",
                    "type",
                    "text",
                    3,
                    "name",
                    "input",
                  ],
                  ["userSearchInput", ""],
                  [3, "click"],
                  ["class", "loading-ring rel", 4, "ngIf"],
                  [
                    "class",
                    "material-icons",
                    "style",
                    "align-self: center;color:#e18e5b;font-size: 24px;",
                    4,
                    "ngIf",
                  ],
                  [
                    "class",
                    "flex f-col rel user-large-row",
                    3,
                    "href",
                    "click",
                    4,
                    "ngFor",
                    "ngForOf",
                  ],
                  [
                    "class",
                    "flex f-col rel user-large-row loading",
                    4,
                    "ngFor",
                    "ngForOf",
                  ],
                  ["class", "error-msg", 4, "ngIf"],
                  ["class", "load-more", 3, "click", 4, "ngIf"],
                  [
                    "class",
                    "white-spinner",
                    "diameter",
                    "20",
                    "style",
                    "align-self:center;margin:16px;",
                    4,
                    "ngIf",
                  ],
                  [1, "loading-ring", "rel"],
                  [
                    1,
                    "material-icons",
                    2,
                    "align-self",
                    "center",
                    "color",
                    "#e18e5b",
                    "font-size",
                    "24px",
                  ],
                  [
                    1,
                    "flex",
                    "f-col",
                    "rel",
                    "user-large-row",
                    3,
                    "href",
                    "click",
                  ],
                  [1, "full-abs", "cover"],
                  [
                    1,
                    "full-abs",
                    2,
                    "background-color",
                    "#0005",
                    "border-radius",
                    "12px",
                  ],
                  [1, "flex", "f-row", 2, "z-index", "2"],
                  ["draggable", "false", "alt", "Avatar", 1, "img", 3, "src"],
                  [1, "flex", "f-col", "stretch", "name"],
                  [1, "stretch"],
                  [3, "innerHTML", 4, "ngIf"],
                  ["class", "flex f-row badges", 4, "ngIf"],
                  [3, "innerHTML"],
                  [1, "flex", "f-row", "badges"],
                  [1, "badge-container", "flex", "f-row", "f-wrap", "rel"],
                  ["class", "badge-icon rel", 4, "ngFor", "ngForOf"],
                  ["class", "badge-icon rel", 4, "ngIf"],
                  [1, "badge-icon", "rel"],
                  ["draggable", "false", 3, "src", "alt"],
                  [1, "flex", "f-col", "rel", "user-large-row", "loading"],
                  [1, "img", 2, "background-color", "#FFF1"],
                  [
                    2,
                    "color",
                    "#0000",
                    "background",
                    "#FFF1",
                    "border-radius",
                    "8px",
                    "align-self",
                    "flex-start",
                  ],
                  [
                    2,
                    "color",
                    "#0000",
                    "background",
                    "#FFF1",
                    "border-radius",
                    "8px",
                    "margin-top",
                    "6px",
                  ],
                  [1, "error-msg"],
                  [1, "load-more", 3, "click"],
                  [
                    "diameter",
                    "20",
                    1,
                    "white-spinner",
                    2,
                    "align-self",
                    "center",
                    "margin",
                    "16px",
                  ],
                ],
                template: function (t, o) {
                  1 & t &&
                    (n.TgZ(0, "div", 0, 1),
                    n.NdJ(
                      "resize",
                      function (g) {
                        return o.onResize(g);
                      },
                      !1,
                      n.Jf7
                    ),
                    n.TgZ(2, "div", 2, 3)(4, "div", 4)(5, "h1"),
                    n._uU(6, "Explore Profiles"),
                    n.qZA(),
                    n.TgZ(7, "div", 5)(8, "span", 6),
                    n._uU(9, "search"),
                    n.qZA(),
                    n.TgZ(10, "input", 7, 8),
                    n.NdJ("input", function (g) {
                      return o.search(g);
                    }),
                    n.qZA(),
                    n.TgZ(12, "button", 9),
                    n.NdJ("click", function () {
                      return o.clearSearch();
                    }),
                    n.YNc(13, y, 11, 0, "div", 10),
                    n.YNc(14, k, 2, 0, "span", 11),
                    n.qZA()(),
                    n.YNc(15, Z, 13, 13, "a", 12),
                    n.YNc(16, A, 11, 1, "a", 13),
                    n.YNc(17, L, 2, 0, "h3", 14),
                    n.YNc(18, R, 2, 0, "button", 15),
                    n.YNc(19, N, 1, 0, "mat-spinner", 16),
                    n.qZA(),
                    n._UZ(20, "app-footer"),
                    n.qZA()()),
                    2 & t &&
                      (n.xp6(10),
                      n.s9C("name", o.randomInputName),
                      n.xp6(3),
                      n.Q6J("ngIf", o.isSearching),
                      n.xp6(1),
                      n.Q6J("ngIf", !o.isSearching && o.hasSearched),
                      n.xp6(1),
                      n.Q6J("ngForOf", o.searchResults),
                      n.xp6(1),
                      n.Q6J("ngForOf", o.loadingElements),
                      n.xp6(1),
                      n.Q6J(
                        "ngIf",
                        o.hasSearched && 0 == o.searchResults.length
                      ),
                      n.xp6(1),
                      n.Q6J("ngIf", o.moreResultsPossible && !o.isLoading),
                      n.xp6(1),
                      n.Q6J("ngIf", o.isLoading));
                },
                directives: [_.O5, _.sg, u.Ou, b.c],
                styles: [
                  "[_ngcontent-%COMP%]:root{--bgColor: #0a1014}*[_ngcontent-%COMP%]{scrollbar-width:initial;-webkit-user-select:none;user-select:none}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], span[_ngcontent-%COMP%], b[_ngcontent-%COMP%], i[_ngcontent-%COMP%]{-webkit-user-select:text;user-select:text}.full-abs[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}.abs-center[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.auto-margin[_ngcontent-%COMP%]{margin:auto}.flex[_ngcontent-%COMP%]{display:flex}.flex.f-center[_ngcontent-%COMP%]{justify-content:center;justify-items:center;align-items:center;align-content:center}.flex.f-row[_ngcontent-%COMP%]{flex-direction:row}.flex.f-col[_ngcontent-%COMP%]{flex-direction:column}.flex.f-row-rev[_ngcontent-%COMP%]{flex-direction:row-reverse;flex-wrap:wrap}.flex.f-wrap[_ngcontent-%COMP%]{flex-wrap:wrap}.flex.stretch[_ngcontent-%COMP%]{flex:1}.flex.f-inline[_ngcontent-%COMP%]{display:inline-flex}.grid[_ngcontent-%COMP%]{display:grid}.rel[_ngcontent-%COMP%]{position:relative}.abs[_ngcontent-%COMP%]{position:absolute}.v-scroll-container[_ngcontent-%COMP%]{overflow:hidden auto;scrollbar-width:thin;height:unset;bottom:0px}.v-scroll-container[_ngcontent-%COMP%]::-webkit-scrollbar{display:initial}.cover[_ngcontent-%COMP%]{object-fit:cover;background-position:50% 50%!important;background-size:cover!important}.front-page[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-top:52px}.centered[_ngcontent-%COMP%]{align-self:center;width:min(1000px,100vw)}.content-centered[_ngcontent-%COMP%]{align-self:center;width:-moz-fit-content;width:fit-content;justify-content:center;align-items:flex-start}.content-centered[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#aaa;max-width:min(450px,90vw);margin-top:3em;opacity:0}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{color:#e18e5b;-webkit-font-smoothing:antialiased}h1[_ngcontent-%COMP%]{font-size:96px;font-weight:500}h2[_ngcontent-%COMP%]{font-size:40px;font-weight:600;opacity:0}h2[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{font-weight:600}p[_ngcontent-%COMP%]{font-size:28px;font-weight:500;letter-spacing:.007em}.inverted[_ngcontent-%COMP%]{background-color:#e18e5c}.inverted[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .inverted[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .inverted[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .inverted[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .inverted[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .inverted[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#1e1e20}.inverted[_ngcontent-%COMP%]   .content-centered[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#555}.text-field[_ngcontent-%COMP%]{max-width:60%}.text-field.left[_ngcontent-%COMP%]{margin-left:10%;margin-top:200px}.text-field.smaller[_ngcontent-%COMP%]{max-width:50%}.lock-item[_ngcontent-%COMP%]{left:110%;top:50%;font-size:min(25vw,275px);width:1em;height:1em}@keyframes loading-glow{0%{background-color:#2ab184}50%{background-color:#23926d}to{background-color:#2ab184}}.static-backgrounds[_ngcontent-%COMP%]{margin-bottom:125px}.static-backgrounds[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:min(1000px,90vw);top:0;left:50%;transform:translate(-50%,-30%)}.perspective-fly-in[_ngcontent-%COMP%]{transform-style:preserve-3d;margin-bottom:105px}.perspective-fly-in[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{will-change:transform;position:absolute;left:0;top:0;height:240px;width:240px;border-radius:20px;overflow:hidden;background-color:#2ab184;filter:drop-shadow(0 0 .75em #0005);animation:loading-glow 1.5s ease-in-out infinite}.perspective-fly-in[_ngcontent-%COMP%] > div.disableLoading[_ngcontent-%COMP%]{background:none;animation:none}.badge-fly-in[_ngcontent-%COMP%]{transform-style:preserve-3d;margin-top:60px;margin-bottom:105px}.badge-fly-in[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;will-change:transform;position:absolute;left:0;top:0;height:100px;overflow:hidden;filter:drop-shadow(0 0 .75em #0005);background:#238061;width:495px;border-radius:9px}.badge-fly-in[_ngcontent-%COMP%] > div.greatdane[_ngcontent-%COMP%]{width:533px}.badge-fly-in[_ngcontent-%COMP%] > div.kudoggie[_ngcontent-%COMP%]{width:500px}.badge-fly-in[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(0n) > img[_ngcontent-%COMP%]{top:100%}.badge-fly-in[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1n) > img[_ngcontent-%COMP%]{top:0%}.badge-fly-in[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2n) > img[_ngcontent-%COMP%]{top:-100%}.badge-fly-in[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3n) > img[_ngcontent-%COMP%]{top:-200%}.badge-fly-in[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4n) > img[_ngcontent-%COMP%]{top:-300%}.badge-fly-in[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5n) > img[_ngcontent-%COMP%]{top:-400%}.badge-fly-in[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6n) > img[_ngcontent-%COMP%]{top:-500%}.badge-fly-in[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7n) > img[_ngcontent-%COMP%]{top:-600%}.badge-fly-in[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8n) > img[_ngcontent-%COMP%]{top:-700%}.badge-fly-in[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(9n) > img[_ngcontent-%COMP%]{top:-800%}.badge-fly-in[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(10n) > img[_ngcontent-%COMP%]{top:-900%}.badge-fly-in[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{position:absolute;left:0;height:400px;width:auto}.badge-fly-in.static[_ngcontent-%COMP%]{width:min(100vw - 310px,680px);height:220px;transform:initial;left:0}.badge-fly-in.static[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{transform:rotate(-6deg)}.badge-fly-in.static[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1n){left:0%;top:0%}.badge-fly-in.static[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2n){left:25%;top:25%}.badge-fly-in.static[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3n){left:50%;top:50%}.badge-fly-in.static[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4n){left:75%;top:75%}@media (max-width: 1100px){h1[_ngcontent-%COMP%]{font-size:64px}p[_ngcontent-%COMP%]{font-size:24px}.centered[_ngcontent-%COMP%]{align-self:center;width:min(600px,100vw)}.text-field.left[_ngcontent-%COMP%]{margin-left:0}.text-field.smaller[_ngcontent-%COMP%]{max-width:70%}.perspective-fly-in[_ngcontent-%COMP%]{margin-top:50px;margin-bottom:120px}.perspective-fly-in[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:200px;width:200px}.static-backgrounds[_ngcontent-%COMP%]{margin-top:50px;margin-bottom:120px}.badge-fly-in[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:80px;width:396px}.badge-fly-in[_ngcontent-%COMP%] > div.greatdane[_ngcontent-%COMP%]{width:426px}.badge-fly-in[_ngcontent-%COMP%] > div.kudoggie[_ngcontent-%COMP%]{width:400px}.badge-fly-in[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{position:absolute;left:0;height:320px;width:auto}.badge-fly-in.static[_ngcontent-%COMP%]{transform:translate(-50%);position:relative;width:50vw;left:25%;height:220px}}@media (max-width: 700px){h1[_ngcontent-%COMP%]{font-size:48px}p[_ngcontent-%COMP%]{font-size:21px;letter-spacing:.011em}.centered[_ngcontent-%COMP%]{align-self:center;width:min(400px,90vw)}.text-field[_ngcontent-%COMP%]{max-width:72%}.text-field.left[_ngcontent-%COMP%]{margin-left:0;margin-top:130px}.text-field.smaller[_ngcontent-%COMP%]{max-width:70%}.perspective-fly-in[_ngcontent-%COMP%]{margin-top:30px;margin-bottom:90px}.perspective-fly-in[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:150px;width:150px}.static-backgrounds[_ngcontent-%COMP%]{margin-top:40px;margin-bottom:90px}.badge-fly-in[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:70px;width:347px}.badge-fly-in[_ngcontent-%COMP%] > div.greatdane[_ngcontent-%COMP%]{width:373px}.badge-fly-in[_ngcontent-%COMP%] > div.kudoggie[_ngcontent-%COMP%]{width:350px}.badge-fly-in[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{position:absolute;left:0;height:280px;width:auto}.badge-fly-in.static[_ngcontent-%COMP%]{left:0;transform:translate(-20%);width:min(82vw - 300px,680px);height:200px}.badge-fly-in.static[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{transform:rotate(-6deg)}}@media (max-width: 500px){h1[_ngcontent-%COMP%]{font-size:44px}p[_ngcontent-%COMP%]{font-size:21px;letter-spacing:.011em}.centered[_ngcontent-%COMP%]{align-self:center;width:min(400px,90vw)}.text-field[_ngcontent-%COMP%]{max-width:100%}.text-field.left[_ngcontent-%COMP%]{margin-left:0;margin-top:130px}.text-field.smaller[_ngcontent-%COMP%]{max-width:80%}.text-field.smaller.ish[_ngcontent-%COMP%]{max-width:94%}.lock-item[_ngcontent-%COMP%]{left:60%;top:110%;font-size:min(25vw,275px);width:1em;height:1em}.perspective-fly-in[_ngcontent-%COMP%]{margin-top:30px;margin-bottom:60px}.perspective-fly-in[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:150px;width:150px}.static-backgrounds[_ngcontent-%COMP%]{margin-bottom:35px}.badge-fly-in[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:60px;width:299px}.badge-fly-in[_ngcontent-%COMP%] > div.greatdane[_ngcontent-%COMP%]{width:320px}.badge-fly-in[_ngcontent-%COMP%] > div.kudoggie[_ngcontent-%COMP%]{width:300px}.badge-fly-in[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{position:absolute;left:0;height:240px;width:auto}.badge-fly-in.static[_ngcontent-%COMP%]{margin-bottom:50px;left:0;transform:initial;width:100%;height:300px;display:flex;flex-direction:column;align-items:flex-start}.badge-fly-in.static[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-bottom:10px;position:relative;left:0!important;top:0!important;transform:initial}.badge-fly-in.static[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2n){align-self:flex-end}}b[_ngcontent-%COMP%]{color:#0000;font-weight:500;background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-image:linear-gradient(90deg,#2dc492,#41f0ca)}.full-profile-container[_ngcontent-%COMP%]{margin-top:120px;font-size:max(3px,min(11px,1vw));height:63em}.full-profile-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:63em}.full-profile-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:63em;width:49em;overflow:hidden;box-shadow:0 0 3em #0000004d;border-radius:3.5em;position:relative;background:linear-gradient(90deg,#2dc492,#41f0ca)}.full-profile-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{position:absolute;top:0em;left:0em;width:auto!important}.full-profile-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div.reveal-profile[_ngcontent-%COMP%]{position:absolute;width:39.38em;height:50.4em;left:50%;top:10%;transform:translate(-50%);transform-origin:50% 50%;will-change:transform;border-radius:2.8em;transition:transform .1s}.full-profile-container.static[_ngcontent-%COMP%]   .reveal-profile[_ngcontent-%COMP%]:nth-of-type(1){transform:translate(-120%)}.full-profile-container.static[_ngcontent-%COMP%]   .reveal-profile[_ngcontent-%COMP%]:nth-of-type(2){transform:translate(20%)}.full-profile-container.disableBackground[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background:none}.avatars[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:.14em;width:1em;height:1em;margin-right:.03em}.avatar-row[_ngcontent-%COMP%]{height:1em;background:#0a1014;will-change:transform,opacity;opacity:0}.avatar-row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:0}.v-height[_ngcontent-%COMP%]{height:var(--viewHeight)}.main-logo[_ngcontent-%COMP%]{width:min(50vw,700px)}@media (max-aspect-ratio: 8/13){.main-logo[_ngcontent-%COMP%]{width:70vw}}.main-logo[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:70%}.main-logo[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{width:100%}.main-logo.animated[_ngcontent-%COMP%]{transform:scale(.85) translateY(20%);transform-origin:50% 50%;transition:transform 1s cubic-bezier(.33,1,.68,1),opacity 1s linear;opacity:0}.main-logo.animated.visible[_ngcontent-%COMP%]{filter:opacity(1);transform:scale(1);opacity:1}.fly-in-text[_ngcontent-%COMP%]{transform:translateY(1em);opacity:0;transition:opacity .6s linear,transform .6s cubic-bezier(.26,.67,.48,.91)}.fly-in-text.appear[_ngcontent-%COMP%]{transform:translateY(0);opacity:1!important}@keyframes arrow-movement{0%{bottom:30px}25%{bottom:20px}50%{bottom:30px}}.more-arrow[_ngcontent-%COMP%]{opacity:0;transition:opacity .5s linear;-webkit-user-select:none;user-select:none;cursor:pointer}.more-arrow.show[_ngcontent-%COMP%]{opacity:1;animation:arrow-movement 3s ease-in-out 1s infinite}.more-arrow[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:700;letter-spacing:.01em;font-size:16px;color:#2dc492}.material-icons[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;cursor:default}.rounded-button[_ngcontent-%COMP%]{font-size:36px;font-family:SF Pro Display,Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:700;letter-spacing:.01em;text-decoration:none;color:#fff;border-radius:980px;border:1px solid white;padding:12px 32px;background-color:#41e6af00;transition:border .1s linear,background-color .1s linear}.rounded-button[_ngcontent-%COMP%]:hover{background-color:#41e6af;border:1px solid #41e6afff}p.classic[_ngcontent-%COMP%]{font-family:Georgia,Times New Roman,Times,serif;font-style:italic;opacity:.7;margin:16px 22px}.intro[_ngcontent-%COMP%]{flex-direction:row;margin-bottom:32px}.intro[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{height:512px;margin-right:64px}.intro[_ngcontent-%COMP%]   .text-logo[_ngcontent-%COMP%]{height:200px;margin-left:-8px}.intro[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{align-items:flex-start;margin-right:16px}.intro[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:-24px;margin-bottom:36px;font-weight:700;font-size:72px}.flex.buttons[_ngcontent-%COMP%]{flex-direction:row}@media screen and (max-width: 1920px){.intro[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{height:450px;margin-right:48px}.intro[_ngcontent-%COMP%]   .text-logo[_ngcontent-%COMP%]{height:160px;margin-left:-8px}.intro[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{margin-right:16px}.intro[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:-18px;margin-bottom:36px;font-weight:700;font-size:72px}.intro[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:32px;padding:12px 32px}p.classic[_ngcontent-%COMP%]{margin:16px 22px}.rounded-button[_ngcontent-%COMP%]{font-size:32px;padding:12px 32px}}@media screen and (max-width: 1500px){.intro[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{height:350px;margin-right:48px}.intro[_ngcontent-%COMP%]   .text-logo[_ngcontent-%COMP%]{height:120px;margin-left:-8px}.intro[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{margin-right:16px}.intro[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:-12px;margin-bottom:36px;font-weight:700;font-size:48px}.intro[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:24px;padding:12px 32px}p.classic[_ngcontent-%COMP%]{margin:16px 22px}.rounded-button[_ngcontent-%COMP%]{font-size:24px;padding:12px 32px}}@media screen and (max-width: 1100px){.intro[_ngcontent-%COMP%]{flex-direction:column}.intro[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{height:350px;margin-right:0}.intro[_ngcontent-%COMP%]   .text-logo[_ngcontent-%COMP%]{height:120px;margin-left:-8px}.intro[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{align-items:center;margin-right:16px}}@media screen and (max-width: 800px){.intro[_ngcontent-%COMP%]{flex-direction:column}.intro[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{height:350px;margin-right:0}.intro[_ngcontent-%COMP%]   .text-logo[_ngcontent-%COMP%]{height:120px;margin-left:-8px}.intro[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{align-items:center;margin-right:0}.intro[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:-12px;margin-bottom:48px;font-weight:700;font-size:36px}.intro[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:24px;padding:12px 24px;min-width:260px;text-align:center}.flex.buttons[_ngcontent-%COMP%]{flex-direction:column;margin-bottom:32px}p.classic[_ngcontent-%COMP%]{margin:16px 22px}.rounded-button[_ngcontent-%COMP%]{font-size:24px;padding:12px 24px;min-width:260px;text-align:center}}@media screen and (max-width: 500px){.intro[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{height:250px;margin-right:0}.intro[_ngcontent-%COMP%]   .text-logo[_ngcontent-%COMP%]{height:100px;margin-left:-8px}.intro[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:-12px;margin-bottom:48px;font-weight:700;font-size:24px}.intro[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:21px;padding:12px 21px;min-width:260px;text-align:center}.flex.buttons[_ngcontent-%COMP%]{flex-direction:column;margin-bottom:32px}p.classic[_ngcontent-%COMP%]{margin:16px 22px;font-size:12px}.rounded-button[_ngcontent-%COMP%]{font-size:21px;padding:12px 21px;min-width:260px;text-align:center}}@media screen and (max-width: 500px) and (max-height: 700px){.intro[_ngcontent-%COMP%]{margin-bottom:48px}.intro[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{height:225px;margin-right:0}.intro[_ngcontent-%COMP%]   .text-logo[_ngcontent-%COMP%]{height:80px}.intro[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:-6px;margin-bottom:32px}.intro[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:18px;padding:12px 16px;min-width:240px}p.classic[_ngcontent-%COMP%]{margin:8px}.rounded-button[_ngcontent-%COMP%]{font-size:18px;padding:12px 16px;min-width:240px}}",
                  '.searchbar[_ngcontent-%COMP%]{margin-top:24px;margin-bottom:12px;background-color:#fff1;border-radius:12px}.searchbar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:4px 12px}.searchbar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:44px;border:none;background:none;outline:none;flex:1;line-height:44px;font-size:18px;color:#e18e5c}.searchbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:none;border:none}.searchbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{cursor:pointer}@keyframes loadingShimmer{0%{background-color:#ffffff10}50%{background-color:#ffffff14}to{background-color:#ffffff10}}.user-large-row[_ngcontent-%COMP%]{background-color:#fff1;border-radius:12px;margin-bottom:12px;box-shadow:0 0 12px #0005;background-size:cover!important;background-position:center!important;overflow:hidden}.user-large-row.loading[_ngcontent-%COMP%]{animation:loadingShimmer 1s ease-in-out infinite}.user-large-row[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{background:#FFF1;margin:16px;border-radius:10px;width:170px;height:170px}.user-large-row[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{margin:16px 24px 16px 0;justify-content:flex-end;overflow:hidden}.user-large-row[_ngcontent-%COMP%]   .name.center[_ngcontent-%COMP%]{justify-content:center}.user-large-row[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:42px}.user-large-row[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:32px;opacity:.7}.user-large-row[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{background-color:#fff1;padding:4px 8px;color:#fffa;border-radius:8px;font-size:22px;font-family:monospace;align-self:flex-start;overflow:hidden;text-overflow:ellipsis;max-width:100%;margin:.1em 0 0}.user-large-row[_ngcontent-%COMP%]   .badges[_ngcontent-%COMP%]{margin-top:6px}.user-large-row[_ngcontent-%COMP%]   .badge-icon[_ngcontent-%COMP%]{width:64px;height:64px;padding:8px;background-color:#fff1;border-radius:8px;margin-right:6px}.user-large-row[_ngcontent-%COMP%]   .badge-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;margin:0;border-radius:0;background:none}.user-large-row[_ngcontent-%COMP%]   .badge-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-family:SF Pro Display,Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:700;font-size:24px}@media screen and (max-width: 1100px){.user-large-row[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{margin:14px;border-radius:10px;width:130px;height:130px}.user-large-row[_ngcontent-%COMP%]   .badges[_ngcontent-%COMP%]{margin-top:4px}.user-large-row[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{margin:14px 18px 14px 0}.user-large-row[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:36px}.user-large-row[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:28px}.user-large-row[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:16px}.user-large-row[_ngcontent-%COMP%]   .badge-icon[_ngcontent-%COMP%]{width:48px;height:48px;padding:6px;border-radius:6px;margin-right:4px}.user-large-row[_ngcontent-%COMP%]   .badge-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:22px}}@media screen and (max-width: 700px){.user-large-row[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{margin:8px;border-radius:8px;width:86px;height:86px}.user-large-row[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{margin:8px 12px 8px 0}.user-large-row[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:22px;margin-bottom:2px}.user-large-row[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px}.user-large-row[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:12px;padding:2px 4px;border-radius:4px}.user-large-row[_ngcontent-%COMP%]   .badge-icon[_ngcontent-%COMP%]{width:32px;height:32px;padding:4px;border-radius:4px;margin-right:4px}.user-large-row[_ngcontent-%COMP%]   .badge-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px}}.user-large-row[_ngcontent-%COMP%], .user-large-row[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{cursor:pointer}@keyframes loading-anim{0%{opacity:1}to{opacity:0}}.loading-ring[_ngcontent-%COMP%]{display:inline-block;position:relative;width:24px;height:24px;top:2px;margin-right:12px}.loading-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{transform-origin:12px 12px;animation:loading-anim 1s linear infinite}.loading-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after{content:" ";display:block;position:absolute;top:1px;left:11px;width:3px;height:5px;border-radius:20%;background:#fffb}.loading-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1n){transform:rotate(36deg);animation-delay:-.8s}.loading-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2n){transform:rotate(72deg);animation-delay:-.7s}.loading-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3n){transform:rotate(108deg);animation-delay:-.6s}.loading-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4n){transform:rotate(144deg);animation-delay:-.5s}.loading-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5n){transform:rotate(180deg);animation-delay:-.4s}.loading-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6n){transform:rotate(216deg);animation-delay:-.3s}.loading-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7n){transform:rotate(252deg);animation-delay:-.2s}.loading-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8n){transform:rotate(288deg);animation-delay:-.1s}.loading-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(9n){transform:rotate(324deg);animation-delay:0s}.loading-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(10n){transform:rotate(360deg);animation-delay:.1s}.load-more[_ngcontent-%COMP%]{background:none;font-size:24px;font-family:SF Pro Display,Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:700;letter-spacing:.01em;text-decoration:none;color:#e18e5c;border-radius:980px;border:1px solid white;padding:12px 32px;background-color:#41e6af00;transition:border .1s linear,background-color .1s linear}.load-more[_ngcontent-%COMP%]:hover{background-color:#41e6af;border:1px solid #41e6afff}@media screen and (max-width: 1100px){.load-more[_ngcontent-%COMP%]{font-size:22px}}@media screen and (max-width: 700px){.load-more[_ngcontent-%COMP%]{font-size:16px}}.error-msg[_ngcontent-%COMP%]{margin:16px}@media (max-width: 500px){.text-page.explore-page[_ngcontent-%COMP%]{margin:12px 0 64px}.searchbar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:14px;height:36px;line-height:36px}.searchbar[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:18px}}@media (max-width: 700px){.text-page.explore-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:36px}.searchbar[_ngcontent-%COMP%]{margin-top:8px}}@media (max-width: 300px){.text-page.explore-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px}.searchbar[_ngcontent-%COMP%]{margin-top:8px}}',
                  '.text-page[_ngcontent-%COMP%]{margin:120px 0}@media (max-width: 1100px){.text-page[_ngcontent-%COMP%]{margin:100px 0}}@media (max-width: 700px){.text-page[_ngcontent-%COMP%]{margin:32px 0 80px}}.text-page[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:12px;line-height:1.33337;font-weight:700;letter-spacing:-.01em;color:#86868b;font-family:SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif;margin-bottom:15px}.text-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:56px;line-height:1.07143;font-weight:700;letter-spacing:-.005em;font-family:SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif;text-align:left}.text-page[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:24px;line-height:1.19048;font-weight:500;letter-spacing:.011em;font-family:SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif;opacity:1;margin-bottom:35px}.text-page[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:19px;line-height:1.4211;font-weight:400;letter-spacing:.012em;font-family:SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.text-page[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#e18e5b}@media (max-width: 1100px){.text-page[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:14px}.text-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:48px}.text-page[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:21px}.text-page[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:17px}}@media (max-width: 700px){.text-page[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:12px}.text-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:32px}.text-page[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:21px}.text-page[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:17px}}.kcc[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .kcc[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .kcc[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .kcc[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .kcc[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .kcc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#e18e5b;-webkit-font-smoothing:antialiased}.kcc.v-scroll-container[_ngcontent-%COMP%]{overflow:hidden auto;scrollbar-width:thin;height:unset;bottom:0px}.kcc.v-scroll-container[_ngcontent-%COMP%]::-webkit-scrollbar{display:initial}.kcc.front-page[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-top:52px}.kcc[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]{align-self:center;width:min(1000px,100vw)}.kcc[_ngcontent-%COMP%]   .content-centered[_ngcontent-%COMP%]{align-self:center;width:-moz-fit-content;width:fit-content;justify-content:center;align-items:flex-start}.kcc[_ngcontent-%COMP%]   .content-centered[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#aaa;max-width:min(450px,90vw);margin-top:3em;opacity:0}@media (max-width: 1100px){.kcc[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]{align-self:center;width:min(600px,100vw)}}@media (max-width: 700px){.kcc[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]{align-self:center;width:min(400px,90vw)}}@media (max-width: 500px){.kcc[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]{align-self:center;width:min(400px,90vw)}}.kcc[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:#0000;font-weight:500;background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-image:linear-gradient(90deg,#2dc492,#41f0ca)}  .magic-link{color:#0000;font-weight:500;background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-image:linear-gradient(90deg,#2dc492,#41f0ca)}.button[_ngcontent-%COMP%]{font-size:19px;line-height:1.4211;font-weight:400;letter-spacing:.012em;font-family:SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.square[_ngcontent-%COMP%]{align-self:stretch;min-height:-moz-fit-content;min-height:fit-content;position:relative;display:flex;overflow:hidden}.square[_ngcontent-%COMP%]:after{content:"";z-index:-1;position:relative;left:0;top:0;height:0;width:100%;padding-top:100%}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));grid-column-gap:min(24px,max(12px,4vw));grid-row-gap:min(24px,max(12px,4vw));margin-bottom:64px}@media (max-width: 1100px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (max-width: 800px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,minmax(0,1fr))}}.gradient-button[_ngcontent-%COMP%]{color:#e18e5c;position:relative;overflow:hidden;border:none;z-index:1}.gradient-button[_ngcontent-%COMP%]:before{z-index:-2;content:"";position:absolute;left:0;top:0;height:100%;width:100%;background:linear-gradient(90deg,#2ab184,#38b99d)}.gradient-button[_ngcontent-%COMP%]:after{z-index:-1;content:"";position:absolute;left:0;top:0;height:100%;width:100%;background-color:#0003;transition:opacity .1s linear;opacity:0}.gradient-button[_ngcontent-%COMP%]:hover:after{opacity:1}.outline-button[_ngcontent-%COMP%]{font-family:SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif;border-radius:980px;font-weight:600;color:#e18e5c;text-decoration:none;position:relative;overflow:hidden;border:none;z-index:1;align-self:center;font-size:12px;padding:10px;min-width:100px;border:3px solid white;background:rgba(255,255,255,0);transition:background .1s linear,color .1s linear}.outline-button[_ngcontent-%COMP%]:first-of-type{margin-right:12px}.outline-button[_ngcontent-%COMP%]:hover{background:white;color:#38b99d}.outline-button.disabled[_ngcontent-%COMP%]{cursor:default!important;opacity:.5}.outline-button.disabled[_ngcontent-%COMP%]:hover{background:rgba(255,255,255,0);color:#e18e5c}',
                ],
              })),
              e
            );
          })(),
        },
      ];
      let U = (() => {
        class e {}
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵmod = n.oAB({ type: e })),
          (e.ɵinj = n.cJS({ imports: [[h.Bz.forChild(H)], h.Bz] })),
          e
        );
      })();
      var J = a(5687);
      let W = (() => {
        class e {}
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵmod = n.oAB({ type: e })),
          (e.ɵinj = n.cJS({ imports: [[_.ez, J.m, U, P.q]] })),
          e
        );
      })();
    },
  },
]);
