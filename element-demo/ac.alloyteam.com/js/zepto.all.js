/* Zepto 1.1.6 - zepto event ajax form ie detect fx fx_methods assets data deferred callbacks selector touch gesture stack ios3 - zeptojs.com/license */
var Zepto = function() {
		function k(t) {
			return null == t ? String(t) : S[C.call(t)] || "object"
		}

		function D(t) {
			return "function" == k(t)
		}

		function Z(t) {
			return null != t && t == t.window
		}

		function L(t) {
			return null != t && t.nodeType == t.DOCUMENT_NODE
		}

		function F(t) {
			return "object" == k(t)
		}

		function $(t) {
			return F(t) && !Z(t) && Object.getPrototypeOf(t) == Object.prototype
		}

		function R(t) {
			return "number" == typeof t.length
		}

		function _(t) {
			return s.call(t, function(t) {
				return null != t
			})
		}

		function q(t) {
			return t.length > 0 ? n.fn.concat.apply([], t) : t
		}

		function z(t) {
			return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
		}

		function I(t) {
			return t in c ? c[t] : c[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
		}

		function W(t, e) {
			return "number" != typeof e || l[z(t)] ? e : e + "px"
		}

		function B(t) {
			var e, n;
			return f[t] || (e = u.createElement(t), u.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), f[t] = n), f[t]
		}

		function V(t) {
			return "children" in t ? a.call(t.children) : n.map(t.childNodes, function(t) {
				return 1 == t.nodeType ? t : void 0
			})
		}

		function H(t, e) {
			var n, i = t ? t.length : 0;
			for (n = 0; i > n; n++) this[n] = t[n];
			this.length = i, this.selector = e || ""
		}

		function U(n, i, r) {
			for (e in i) r && ($(i[e]) || M(i[e])) ? ($(i[e]) && !$(n[e]) && (n[e] = {}), M(i[e]) && !M(n[e]) && (n[e] = []), U(n[e], i[e], r)) : i[e] !== t && (n[e] = i[e])
		}

		function X(t, e) {
			return null == e ? n(t) : n(t).filter(e)
		}

		function Y(t, e, n, i) {
			return D(e) ? e.call(t, n, i) : e
		}

		function G(t, e, n) {
			null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
		}

		function J(e, n) {
			var i = e.className || "",
				r = i && i.baseVal !== t;
			return n === t ? r ? i.baseVal : i : void(r ? i.baseVal = n : e.className = n)
		}

		function K(t) {
			try {
				return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? n.parseJSON(t) : t) : t
			} catch (e) {
				return t
			}
		}

		function Q(t, e) {
			e(t);
			for (var n = 0, i = t.childNodes.length; i > n; n++) Q(t.childNodes[n], e)
		}
		var t, e, n, i, O, A, r = [],
			o = r.concat,
			s = r.filter,
			a = r.slice,
			u = window.document,
			f = {},
			c = {},
			l = {
				"column-count": 1,
				columns: 1,
				"font-weight": 1,
				"line-height": 1,
				opacity: 1,
				"z-index": 1,
				zoom: 1
			},
			h = /^\s*<(\w+|!)[^>]*>/,
			p = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
			d = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
			m = /^(?:body|html)$/i,
			g = /([A-Z])/g,
			v = ["val", "css", "html", "text", "data", "width", "height", "offset"],
			y = ["after", "prepend", "before", "append"],
			w = u.createElement("table"),
			b = u.createElement("tr"),
			x = {
				tr: u.createElement("tbody"),
				tbody: w,
				thead: w,
				tfoot: w,
				td: b,
				th: b,
				"*": u.createElement("div")
			},
			E = /complete|loaded|interactive/,
			T = /^[\w-]*$/,
			S = {},
			C = S.toString,
			j = {},
			P = u.createElement("div"),
			N = {
				tabindex: "tabIndex",
				readonly: "readOnly",
				"for": "htmlFor",
				"class": "className",
				maxlength: "maxLength",
				cellspacing: "cellSpacing",
				cellpadding: "cellPadding",
				rowspan: "rowSpan",
				colspan: "colSpan",
				usemap: "useMap",
				frameborder: "frameBorder",
				contenteditable: "contentEditable"
			},
			M = Array.isArray ||
		function(t) {
			return t instanceof Array
		};
		return j.matches = function(t, e) {
			if (!e || !t || 1 !== t.nodeType) return !1;
			var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
			if (n) return n.call(t, e);
			var i, r = t.parentNode,
				o = !r;
			return o && (r = P).appendChild(t), i = ~j.qsa(r, e).indexOf(t), o && P.removeChild(t), i
		}, O = function(t) {
			return t.replace(/-+(.)?/g, function(t, e) {
				return e ? e.toUpperCase() : ""
			})
		}, A = function(t) {
			return s.call(t, function(e, n) {
				return t.indexOf(e) == n
			})
		}, j.fragment = function(e, i, r) {
			var o, s, f;
			return p.test(e) && (o = n(u.createElement(RegExp.$1))), o || (e.replace && (e = e.replace(d, "<$1></$2>")), i === t && (i = h.test(e) && RegExp.$1), i in x || (i = "*"), f = x[i], f.innerHTML = "" + e, o = n.each(a.call(f.childNodes), function() {
				f.removeChild(this)
			})), $(r) && (s = n(o), n.each(r, function(t, e) {
				v.indexOf(t) > -1 ? s[t](e) : s.attr(t, e)
			})), o
		}, j.Z = function(t, e) {
			return new H(t, e)
		}, j.isZ = function(t) {
			return t instanceof j.Z
		}, j.init = function(e, i) {
			var r;
			if (!e) return j.Z();
			if ("string" == typeof e) if (e = e.trim(), "<" == e[0] && h.test(e)) r = j.fragment(e, RegExp.$1, i), e = null;
			else {
				if (i !== t) return n(i).find(e);
				r = j.qsa(u, e)
			} else {
				if (D(e)) return n(u).ready(e);
				if (j.isZ(e)) return e;
				if (M(e)) r = _(e);
				else if (F(e)) r = [e], e = null;
				else if (h.test(e)) r = j.fragment(e.trim(), RegExp.$1, i), e = null;
				else {
					if (i !== t) return n(i).find(e);
					r = j.qsa(u, e)
				}
			}
			return j.Z(r, e)
		}, n = function(t, e) {
			return j.init(t, e)
		}, n.extend = function(t) {
			var e, n = a.call(arguments, 1);
			return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function(n) {
				U(t, n, e)
			}), t
		}, j.qsa = function(t, e) {
			var n, i = "#" == e[0],
				r = !i && "." == e[0],
				o = i || r ? e.slice(1) : e,
				s = T.test(o);
			return t.getElementById && s && i ? (n = t.getElementById(o)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType ? [] : a.call(s && !i && t.getElementsByClassName ? r ? t.getElementsByClassName(o) : t.getElementsByTagName(e) : t.querySelectorAll(e))
		}, n.contains = u.documentElement.contains ?
		function(t, e) {
			return t !== e && t.contains(e)
		} : function(t, e) {
			for (; e && (e = e.parentNode);) if (e === t) return !0;
			return !1
		}, n.type = k, n.isFunction = D, n.isWindow = Z, n.isArray = M, n.isPlainObject = $, n.isEmptyObject = function(t) {
			var e;
			for (e in t) return !1;
			return !0
		}, n.inArray = function(t, e, n) {
			return r.indexOf.call(e, t, n)
		}, n.camelCase = O, n.trim = function(t) {
			return null == t ? "" : String.prototype.trim.call(t)
		}, n.uuid = 0, n.support = {}, n.expr = {}, n.noop = function() {}, n.map = function(t, e) {
			var n, r, o, i = [];
			if (R(t)) for (r = 0; r < t.length; r++) n = e(t[r], r), null != n && i.push(n);
			else for (o in t) n = e(t[o], o), null != n && i.push(n);
			return q(i)
		}, n.each = function(t, e) {
			var n, i;
			if (R(t)) {
				for (n = 0; n < t.length; n++) if (e.call(t[n], n, t[n]) === !1) return t
			} else for (i in t) if (e.call(t[i], i, t[i]) === !1) return t;
			return t
		}, n.grep = function(t, e) {
			return s.call(t, e)
		}, window.JSON && (n.parseJSON = JSON.parse), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
			S["[object " + e + "]"] = e.toLowerCase()
		}), n.fn = {
			constructor: j.Z,
			length: 0,
			forEach: r.forEach,
			reduce: r.reduce,
			push: r.push,
			sort: r.sort,
			splice: r.splice,
			indexOf: r.indexOf,
			concat: function() {
				var t, e, n = [];
				for (t = 0; t < arguments.length; t++) e = arguments[t], n[t] = j.isZ(e) ? e.toArray() : e;
				return o.apply(j.isZ(this) ? this.toArray() : this, n)
			},
			map: function(t) {
				return n(n.map(this, function(e, n) {
					return t.call(e, n, e)
				}))
			},
			slice: function() {
				return n(a.apply(this, arguments))
			},
			ready: function(t) {
				return E.test(u.readyState) && u.body ? t(n) : u.addEventListener("DOMContentLoaded", function() {
					t(n)
				}, !1), this
			},
			get: function(e) {
				return e === t ? a.call(this) : this[e >= 0 ? e : e + this.length]
			},
			toArray: function() {
				return this.get()
			},
			size: function() {
				return this.length
			},
			remove: function() {
				return this.each(function() {
					null != this.parentNode && this.parentNode.removeChild(this)
				})
			},
			each: function(t) {
				return r.every.call(this, function(e, n) {
					return t.call(e, n, e) !== !1
				}), this
			},
			filter: function(t) {
				return D(t) ? this.not(this.not(t)) : n(s.call(this, function(e) {
					return j.matches(e, t)
				}))
			},
			add: function(t, e) {
				return n(A(this.concat(n(t, e))))
			},
			is: function(t) {
				return this.length > 0 && j.matches(this[0], t)
			},
			not: function(e) {
				var i = [];
				if (D(e) && e.call !== t) this.each(function(t) {
					e.call(this, t) || i.push(this)
				});
				else {
					var r = "string" == typeof e ? this.filter(e) : R(e) && D(e.item) ? a.call(e) : n(e);
					this.forEach(function(t) {
						r.indexOf(t) < 0 && i.push(t)
					})
				}
				return n(i)
			},
			has: function(t) {
				return this.filter(function() {
					return F(t) ? n.contains(this, t) : n(this).find(t).size()
				})
			},
			eq: function(t) {
				return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
			},
			first: function() {
				var t = this[0];
				return t && !F(t) ? t : n(t)
			},
			last: function() {
				var t = this[this.length - 1];
				return t && !F(t) ? t : n(t)
			},
			find: function(t) {
				var e, i = this;
				return e = t ? "object" == typeof t ? n(t).filter(function() {
					var t = this;
					return r.some.call(i, function(e) {
						return n.contains(e, t)
					})
				}) : 1 == this.length ? n(j.qsa(this[0], t)) : this.map(function() {
					return j.qsa(this, t)
				}) : n()
			},
			closest: function(t, e) {
				var i = this[0],
					r = !1;
				for ("object" == typeof t && (r = n(t)); i && !(r ? r.indexOf(i) >= 0 : j.matches(i, t));) i = i !== e && !L(i) && i.parentNode;
				return n(i)
			},
			parents: function(t) {
				for (var e = [], i = this; i.length > 0;) i = n.map(i, function(t) {
					return (t = t.parentNode) && !L(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0
				});
				return X(e, t)
			},
			parent: function(t) {
				return X(A(this.pluck("parentNode")), t)
			},
			children: function(t) {
				return X(this.map(function() {
					return V(this)
				}), t)
			},
			contents: function() {
				return this.map(function() {
					return this.contentDocument || a.call(this.childNodes)
				})
			},
			siblings: function(t) {
				return X(this.map(function(t, e) {
					return s.call(V(e.parentNode), function(t) {
						return t !== e
					})
				}), t)
			},
			empty: function() {
				return this.each(function() {
					this.innerHTML = ""
				})
			},
			pluck: function(t) {
				return n.map(this, function(e) {
					return e[t]
				})
			},
			show: function() {
				return this.each(function() {
					"none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = B(this.nodeName))
				})
			},
			replaceWith: function(t) {
				return this.before(t).remove()
			},
			wrap: function(t) {
				var e = D(t);
				if (this[0] && !e) var i = n(t).get(0),
					r = i.parentNode || this.length > 1;
				return this.each(function(o) {
					n(this).wrapAll(e ? t.call(this, o) : r ? i.cloneNode(!0) : i)
				})
			},
			wrapAll: function(t) {
				if (this[0]) {
					n(this[0]).before(t = n(t));
					for (var e;
					(e = t.children()).length;) t = e.first();
					n(t).append(this)
				}
				return this
			},
			wrapInner: function(t) {
				var e = D(t);
				return this.each(function(i) {
					var r = n(this),
						o = r.contents(),
						s = e ? t.call(this, i) : t;
					o.length ? o.wrapAll(s) : r.append(s)
				})
			},
			unwrap: function() {
				return this.parent().each(function() {
					n(this).replaceWith(n(this).children())
				}), this
			},
			clone: function() {
				return this.map(function() {
					return this.cloneNode(!0)
				})
			},
			hide: function() {
				return this.css("display", "none")
			},
			toggle: function(e) {
				return this.each(function() {
					var i = n(this);
					(e === t ? "none" == i.css("display") : e) ? i.show() : i.hide()
				})
			},
			prev: function(t) {
				return n(this.pluck("previousElementSibling")).filter(t || "*")
			},
			next: function(t) {
				return n(this.pluck("nextElementSibling")).filter(t || "*")
			},
			html: function(t) {
				return 0 in arguments ? this.each(function(e) {
					var i = this.innerHTML;
					n(this).empty().append(Y(this, t, e, i))
				}) : 0 in this ? this[0].innerHTML : null
			},
			text: function(t) {
				return 0 in arguments ? this.each(function(e) {
					var n = Y(this, t, e, this.textContent);
					this.textContent = null == n ? "" : "" + n
				}) : 0 in this ? this[0].textContent : null
			},
			attr: function(n, i) {
				var r;
				return "string" != typeof n || 1 in arguments ? this.each(function(t) {
					if (1 === this.nodeType) if (F(n)) for (e in n) G(this, e, n[e]);
					else G(this, n, Y(this, i, t, this.getAttribute(n)))
				}) : this.length && 1 === this[0].nodeType ? !(r = this[0].getAttribute(n)) && n in this[0] ? this[0][n] : r : t
			},
			removeAttr: function(t) {
				return this.each(function() {
					1 === this.nodeType && t.split(" ").forEach(function(t) {
						G(this, t)
					}, this)
				})
			},
			prop: function(t, e) {
				return t = N[t] || t, 1 in arguments ? this.each(function(n) {
					this[t] = Y(this, e, n, this[t])
				}) : this[0] && this[0][t]
			},
			data: function(e, n) {
				var i = "data-" + e.replace(g, "-$1").toLowerCase(),
					r = 1 in arguments ? this.attr(i, n) : this.attr(i);
				return null !== r ? K(r) : t
			},
			val: function(t) {
				return 0 in arguments ? this.each(function(e) {
					this.value = Y(this, t, e, this.value)
				}) : this[0] && (this[0].multiple ? n(this[0]).find("option").filter(function() {
					return this.selected
				}).pluck("value") : this[0].value)
			},
			offset: function(t) {
				if (t) return this.each(function(e) {
					var i = n(this),
						r = Y(this, t, e, i.offset()),
						o = i.offsetParent().offset(),
						s = {
							top: r.top - o.top,
							left: r.left - o.left
						};
					"static" == i.css("position") && (s.position = "relative"), i.css(s)
				});
				if (!this.length) return null;
				if (!n.contains(u.documentElement, this[0])) return {
					top: 0,
					left: 0
				};
				var e = this[0].getBoundingClientRect();
				return {
					left: e.left + window.pageXOffset,
					top: e.top + window.pageYOffset,
					width: Math.round(e.width),
					height: Math.round(e.height)
				}
			},
			css: function(t, i) {
				if (arguments.length < 2) {
					var r, o = this[0];
					if (!o) return;
					if (r = getComputedStyle(o, ""), "string" == typeof t) return o.style[O(t)] || r.getPropertyValue(t);
					if (M(t)) {
						var s = {};
						return n.each(t, function(t, e) {
							s[e] = o.style[O(e)] || r.getPropertyValue(e)
						}), s
					}
				}
				var a = "";
				if ("string" == k(t)) i || 0 === i ? a = z(t) + ":" + W(t, i) : this.each(function() {
					this.style.removeProperty(z(t))
				});
				else for (e in t) t[e] || 0 === t[e] ? a += z(e) + ":" + W(e, t[e]) + ";" : this.each(function() {
					this.style.removeProperty(z(e))
				});
				return this.each(function() {
					this.style.cssText += ";" + a
				})
			},
			index: function(t) {
				return t ? this.indexOf(n(t)[0]) : this.parent().children().indexOf(this[0])
			},
			hasClass: function(t) {
				return t ? r.some.call(this, function(t) {
					return this.test(J(t))
				}, I(t)) : !1
			},
			addClass: function(t) {
				return t ? this.each(function(e) {
					if ("className" in this) {
						i = [];
						var r = J(this),
							o = Y(this, t, e, r);
						o.split(/\s+/g).forEach(function(t) {
							n(this).hasClass(t) || i.push(t)
						}, this), i.length && J(this, r + (r ? " " : "") + i.join(" "))
					}
				}) : this
			},
			removeClass: function(e) {
				return this.each(function(n) {
					if ("className" in this) {
						if (e === t) return J(this, "");
						i = J(this), Y(this, e, n, i).split(/\s+/g).forEach(function(t) {
							i = i.replace(I(t), " ")
						}), J(this, i.trim())
					}
				})
			},
			toggleClass: function(e, i) {
				return e ? this.each(function(r) {
					var o = n(this),
						s = Y(this, e, r, J(this));
					s.split(/\s+/g).forEach(function(e) {
						(i === t ? !o.hasClass(e) : i) ? o.addClass(e) : o.removeClass(e)
					})
				}) : this
			},
			scrollTop: function(e) {
				if (this.length) {
					var n = "scrollTop" in this[0];
					return e === t ? n ? this[0].scrollTop : this[0].pageYOffset : this.each(n ?
					function() {
						this.scrollTop = e
					} : function() {
						this.scrollTo(this.scrollX, e)
					})
				}
			},
			scrollLeft: function(e) {
				if (this.length) {
					var n = "scrollLeft" in this[0];
					return e === t ? n ? this[0].scrollLeft : this[0].pageXOffset : this.each(n ?
					function() {
						this.scrollLeft = e
					} : function() {
						this.scrollTo(e, this.scrollY)
					})
				}
			},
			position: function() {
				if (this.length) {
					var t = this[0],
						e = this.offsetParent(),
						i = this.offset(),
						r = m.test(e[0].nodeName) ? {
							top: 0,
							left: 0
						} : e.offset();
					return i.top -= parseFloat(n(t).css("margin-top")) || 0, i.left -= parseFloat(n(t).css("margin-left")) || 0, r.top += parseFloat(n(e[0]).css("border-top-width")) || 0, r.left += parseFloat(n(e[0]).css("border-left-width")) || 0, {
						top: i.top - r.top,
						left: i.left - r.left
					}
				}
			},
			offsetParent: function() {
				return this.map(function() {
					for (var t = this.offsetParent || u.body; t && !m.test(t.nodeName) && "static" == n(t).css("position");) t = t.offsetParent;
					return t
				})
			}
		}, n.fn.detach = n.fn.remove, ["width", "height"].forEach(function(e) {
			var i = e.replace(/./, function(t) {
				return t[0].toUpperCase()
			});
			n.fn[e] = function(r) {
				var o, s = this[0];
				return r === t ? Z(s) ? s["inner" + i] : L(s) ? s.documentElement["scroll" + i] : (o = this.offset()) && o[e] : this.each(function(t) {
					s = n(this), s.css(e, Y(this, r, t, s[e]()))
				})
			}
		}), y.forEach(function(t, e) {
			var i = e % 2;
			n.fn[t] = function() {
				var t, o, r = n.map(arguments, function(e) {
					return t = k(e), "object" == t || "array" == t || null == e ? e : j.fragment(e)
				}),
					s = this.length > 1;
				return r.length < 1 ? this : this.each(function(t, a) {
					o = i ? a : a.parentNode, a = 0 == e ? a.nextSibling : 1 == e ? a.firstChild : 2 == e ? a : null;
					var f = n.contains(u.documentElement, o);
					r.forEach(function(t) {
						if (s) t = t.cloneNode(!0);
						else if (!o) return n(t).remove();
						o.insertBefore(t, a), f && Q(t, function(t) {
							null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
						})
					})
				})
			}, n.fn[i ? t + "To" : "insert" + (e ? "Before" : "After")] = function(e) {
				return n(e)[t](this), this
			}
		}), j.Z.prototype = H.prototype = n.fn, j.uniq = A, j.deserializeValue = K, n.zepto = j, n
	}();
window.Zepto = Zepto, void 0 === window.$ && (window.$ = Zepto), function(t) {
	function l(t) {
		return t._zid || (t._zid = e++)
	}

	function h(t, e, n, i) {
		if (e = p(e), e.ns) var r = d(e.ns);
		return (s[l(t)] || []).filter(function(t) {
			return !(!t || e.e && t.e != e.e || e.ns && !r.test(t.ns) || n && l(t.fn) !== l(n) || i && t.sel != i)
		})
	}

	function p(t) {
		var e = ("" + t).split(".");
		return {
			e: e[0],
			ns: e.slice(1).sort().join(" ")
		}
	}

	function d(t) {
		return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
	}

	function m(t, e) {
		return t.del && !u && t.e in f || !! e
	}

	function g(t) {
		return c[t] || u && f[t] || t
	}

	function v(e, i, r, o, a, u, f) {
		var h = l(e),
			d = s[h] || (s[h] = []);
		i.split(/\s/).forEach(function(i) {
			if ("ready" == i) return t(document).ready(r);
			var s = p(i);
			s.fn = r, s.sel = a, s.e in c && (r = function(e) {
				var n = e.relatedTarget;
				return !n || n !== this && !t.contains(this, n) ? s.fn.apply(this, arguments) : void 0
			}), s.del = u;
			var l = u || r;
			s.proxy = function(t) {
				if (t = T(t), !t.isImmediatePropagationStopped()) {
					t.data = o;
					var i = l.apply(e, t._args == n ? [t] : [t].concat(t._args));
					return i === !1 && (t.preventDefault(), t.stopPropagation()), i
				}
			}, s.i = d.length, d.push(s), "addEventListener" in e && e.addEventListener(g(s.e), s.proxy, m(s, f))
		})
	}

	function y(t, e, n, i, r) {
		var o = l(t);
		(e || "").split(/\s/).forEach(function(e) {
			h(t, e, n, i).forEach(function(e) {
				delete s[o][e.i], "removeEventListener" in t && t.removeEventListener(g(e.e), e.proxy, m(e, r))
			})
		})
	}

	function T(e, i) {
		return (i || !e.isDefaultPrevented) && (i || (i = e), t.each(E, function(t, n) {
			var r = i[t];
			e[t] = function() {
				return this[n] = w, r && r.apply(i, arguments)
			}, e[n] = b
		}), (i.defaultPrevented !== n ? i.defaultPrevented : "returnValue" in i ? i.returnValue === !1 : i.getPreventDefault && i.getPreventDefault()) && (e.isDefaultPrevented = w)), e
	}

	function S(t) {
		var e, i = {
			originalEvent: t
		};
		for (e in t) x.test(e) || t[e] === n || (i[e] = t[e]);
		return T(i, t)
	}
	var n, e = 1,
		i = Array.prototype.slice,
		r = t.isFunction,
		o = function(t) {
			return "string" == typeof t
		},
		s = {},
		a = {},
		u = "onfocusin" in window,
		f = {
			focus: "focusin",
			blur: "focusout"
		},
		c = {
			mouseenter: "mouseover",
			mouseleave: "mouseout"
		};
	a.click = a.mousedown = a.mouseup = a.mousemove = "MouseEvents", t.event = {
		add: v,
		remove: y
	}, t.proxy = function(e, n) {
		var s = 2 in arguments && i.call(arguments, 2);
		if (r(e)) {
			var a = function() {
					return e.apply(n, s ? s.concat(i.call(arguments)) : arguments)
				};
			return a._zid = l(e), a
		}
		if (o(n)) return s ? (s.unshift(e[n], e), t.proxy.apply(null, s)) : t.proxy(e[n], e);
		throw new TypeError("expected function")
	}, t.fn.bind = function(t, e, n) {
		return this.on(t, e, n)
	}, t.fn.unbind = function(t, e) {
		return this.off(t, e)
	}, t.fn.one = function(t, e, n, i) {
		return this.on(t, e, n, i, 1)
	};
	var w = function() {
			return !0
		},
		b = function() {
			return !1
		},
		x = /^([A-Z]|returnValue$|layer[XY]$)/,
		E = {
			preventDefault: "isDefaultPrevented",
			stopImmediatePropagation: "isImmediatePropagationStopped",
			stopPropagation: "isPropagationStopped"
		};
	t.fn.delegate = function(t, e, n) {
		return this.on(e, t, n)
	}, t.fn.undelegate = function(t, e, n) {
		return this.off(e, t, n)
	}, t.fn.live = function(e, n) {
		return t(document.body).delegate(this.selector, e, n), this
	}, t.fn.die = function(e, n) {
		return t(document.body).undelegate(this.selector, e, n), this
	}, t.fn.on = function(e, s, a, u, f) {
		var c, l, h = this;
		return e && !o(e) ? (t.each(e, function(t, e) {
			h.on(t, s, a, e, f)
		}), h) : (o(s) || r(u) || u === !1 || (u = a, a = s, s = n), (u === n || a === !1) && (u = a, a = n), u === !1 && (u = b), h.each(function(n, r) {
			f && (c = function(t) {
				return y(r, t.type, u), u.apply(this, arguments)
			}), s && (l = function(e) {
				var n, o = t(e.target).closest(s, r).get(0);
				return o && o !== r ? (n = t.extend(S(e), {
					currentTarget: o,
					liveFired: r
				}), (c || u).apply(o, [n].concat(i.call(arguments, 1)))) : void 0
			}), v(r, e, u, a, s, l || c)
		}))
	}, t.fn.off = function(e, i, s) {
		var a = this;
		return e && !o(e) ? (t.each(e, function(t, e) {
			a.off(t, i, e)
		}), a) : (o(i) || r(s) || s === !1 || (s = i, i = n), s === !1 && (s = b), a.each(function() {
			y(this, e, s, i)
		}))
	}, t.fn.trigger = function(e, n) {
		return e = o(e) || t.isPlainObject(e) ? t.Event(e) : T(e), e._args = n, this.each(function() {
			e.type in f && "function" == typeof this[e.type] ? this[e.type]() : "dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n)
		})
	}, t.fn.triggerHandler = function(e, n) {
		var i, r;
		return this.each(function(s, a) {
			i = S(o(e) ? t.Event(e) : e), i._args = n, i.target = a, t.each(h(a, e.type || e), function(t, e) {
				return r = e.proxy(i), i.isImmediatePropagationStopped() ? !1 : void 0
			})
		}), r
	}, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e) {
		t.fn[e] = function(t) {
			return 0 in arguments ? this.bind(e, t) : this.trigger(e)
		}
	}), t.Event = function(t, e) {
		o(t) || (e = t, t = e.type);
		var n = document.createEvent(a[t] || "Events"),
			i = !0;
		if (e) for (var r in e)"bubbles" == r ? i = !! e[r] : n[r] = e[r];
		return n.initEvent(t, i, !0), T(n)
	}
}(Zepto), function(t) {
	function h(e, n, i) {
		var r = t.Event(n);
		return t(e).trigger(r, i), !r.isDefaultPrevented()
	}

	function p(t, e, i, r) {
		return t.global ? h(e || n, i, r) : void 0
	}

	function d(e) {
		e.global && 0 === t.active++ && p(e, null, "ajaxStart")
	}

	function m(e) {
		e.global && !--t.active && p(e, null, "ajaxStop")
	}

	function g(t, e) {
		var n = e.context;
		return e.beforeSend.call(n, t, e) === !1 || p(e, n, "ajaxBeforeSend", [t, e]) === !1 ? !1 : void p(e, n, "ajaxSend", [t, e])
	}

	function v(t, e, n, i) {
		var r = n.context,
			o = "success";
		n.success.call(r, t, o, e), i && i.resolveWith(r, [t, o, e]), p(n, r, "ajaxSuccess", [e, n, t]), w(o, e, n)
	}

	function y(t, e, n, i, r) {
		var o = i.context;
		i.error.call(o, n, e, t), r && r.rejectWith(o, [n, e, t]), p(i, o, "ajaxError", [n, i, t || e]), w(e, n, i)
	}

	function w(t, e, n) {
		var i = n.context;
		n.complete.call(i, e, t), p(n, i, "ajaxComplete", [e, n]), m(n)
	}

	function b() {}

	function x(t) {
		return t && (t = t.split(";", 2)[0]), t && (t == f ? "html" : t == u ? "json" : s.test(t) ? "script" : a.test(t) && "xml") || "text"
	}

	function E(t, e) {
		return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
	}

	function T(e) {
		e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = E(e.url, e.data), e.data = void 0)
	}

	function S(e, n, i, r) {
		return t.isFunction(n) && (r = i, i = n, n = void 0), t.isFunction(i) || (r = i, i = void 0), {
			url: e,
			data: n,
			success: i,
			dataType: r
		}
	}

	function j(e, n, i, r) {
		var o, s = t.isArray(n),
			a = t.isPlainObject(n);
		t.each(n, function(n, u) {
			o = t.type(u), r && (n = i ? r : r + "[" + (a || "object" == o || "array" == o ? n : "") + "]"), !r && s ? e.add(u.name, u.value) : "array" == o || !i && "object" == o ? j(e, u, i, n) : e.add(n, u)
		})
	}
	var i, r, e = 0,
		n = window.document,
		o = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
		s = /^(?:text|application)\/javascript/i,
		a = /^(?:text|application)\/xml/i,
		u = "application/json",
		f = "text/html",
		c = /^\s*$/,
		l = n.createElement("a");
	l.href = window.location.href, t.active = 0, t.ajaxJSONP = function(i, r) {
		if (!("type" in i)) return t.ajax(i);
		var f, h, o = i.jsonpCallback,
			s = (t.isFunction(o) ? o() : o) || "jsonp" + ++e,
			a = n.createElement("script"),
			u = window[s],
			c = function(e) {
				t(a).triggerHandler("error", e || "abort")
			},
			l = {
				abort: c
			};
		return r && r.promise(l), t(a).on("load error", function(e, n) {
			clearTimeout(h), t(a).off().remove(), "error" != e.type && f ? v(f[0], l, i, r) : y(null, n || "error", l, i, r), window[s] = u, f && t.isFunction(u) && u(f[0]), u = f = void 0
		}), g(l, i) === !1 ? (c("abort"), l) : (window[s] = function() {
			f = arguments
		}, a.src = i.url.replace(/\?(.+)=\?/, "?$1=" + s), n.head.appendChild(a), i.timeout > 0 && (h = setTimeout(function() {
			c("timeout")
		}, i.timeout)), l)
	}, t.ajaxSettings = {
		type: "GET",
		beforeSend: b,
		success: b,
		error: b,
		complete: b,
		context: null,
		global: !0,
		xhr: function() {
			return new window.XMLHttpRequest
		},
		accepts: {
			script: "text/javascript, application/javascript, application/x-javascript",
			json: u,
			xml: "application/xml, text/xml",
			html: f,
			text: "text/plain"
		},
		crossDomain: !1,
		timeout: 0,
		processData: !0,
		cache: !0
	}, t.ajax = function(e) {
		var a, u, o = t.extend({}, e || {}),
			s = t.Deferred && t.Deferred();
		for (i in t.ajaxSettings) void 0 === o[i] && (o[i] = t.ajaxSettings[i]);
		d(o), o.crossDomain || (a = n.createElement("a"), a.href = o.url, a.href = a.href, o.crossDomain = l.protocol + "//" + l.host != a.protocol + "//" + a.host), o.url || (o.url = window.location.toString()), (u = o.url.indexOf("#")) > -1 && (o.url = o.url.slice(0, u)), T(o);
		var f = o.dataType,
			h = /\?.+=\?/.test(o.url);
		if (h && (f = "jsonp"), o.cache !== !1 && (e && e.cache === !0 || "script" != f && "jsonp" != f) || (o.url = E(o.url, "_=" + Date.now())), "jsonp" == f) return h || (o.url = E(o.url, o.jsonp ? o.jsonp + "=?" : o.jsonp === !1 ? "" : "callback=?")), t.ajaxJSONP(o, s);
		var O, p = o.accepts[f],
			m = {},
			w = function(t, e) {
				m[t.toLowerCase()] = [t, e]
			},
			S = /^([\w-]+:)\/\//.test(o.url) ? RegExp.$1 : window.location.protocol,
			C = o.xhr(),
			j = C.setRequestHeader;
		if (s && s.promise(C), o.crossDomain || w("X-Requested-With", "XMLHttpRequest"), w("Accept", p || "*/*"), (p = o.mimeType || p) && (p.indexOf(",") > -1 && (p = p.split(",", 2)[0]), C.overrideMimeType && C.overrideMimeType(p)), (o.contentType || o.contentType !== !1 && o.data && "GET" != o.type.toUpperCase()) && w("Content-Type", o.contentType || "application/x-www-form-urlencoded"), o.headers) for (r in o.headers) w(r, o.headers[r]);
		if (C.setRequestHeader = w, C.onreadystatechange = function() {
			if (4 == C.readyState) {
				C.onreadystatechange = b, clearTimeout(O);
				var e, n = !1;
				if (C.status >= 200 && C.status < 300 || 304 == C.status || 0 == C.status && "file:" == S) {
					f = f || x(o.mimeType || C.getResponseHeader("content-type")), e = C.responseText;
					try {
						"script" == f ? (1, eval)(e) : "xml" == f ? e = C.responseXML : "json" == f && (e = c.test(e) ? null : t.parseJSON(e))
					} catch (i) {
						n = i
					}
					n ? y(n, "parsererror", C, o, s) : v(e, C, o, s)
				} else y(C.statusText || null, C.status ? "error" : "abort", C, o, s)
			}
		}, g(C, o) === !1) return C.abort(), y(null, "abort", C, o, s), C;
		if (o.xhrFields) for (r in o.xhrFields)"withCredentials" !== r && (C[r] = o.xhrFields[r]);
		var A = "async" in o ? o.async : !0;
		C.open(o.type, o.url, A, o.username, o.password), o.xhrFields && o.xhrFields.withCredentials && (C.withCredentials = !0);
		for (r in m) j.apply(C, m[r]);
		return o.timeout > 0 && (O = setTimeout(function() {
			C.onreadystatechange = b, C.abort(), y(null, "timeout", C, o, s)
		}, o.timeout)), C.send(o.data ? o.data : null), C
	}, t.get = function() {
		return t.ajax(S.apply(null, arguments))
	}, t.post = function() {
		var e = S.apply(null, arguments);
		return e.type = "POST", t.ajax(e)
	}, t.getJSON = function() {
		var e = S.apply(null, arguments);
		return e.dataType = "json", t.ajax(e)
	}, t.fn.load = function(e, n, i) {
		if (!this.length) return this;
		var a, r = this,
			s = e.split(/\s/),
			u = S(e, n, i),
			f = u.success;
		return s.length > 1 && (u.url = s[0], a = s[1]), u.success = function(e) {
			r.html(a ? t("<div>").html(e.replace(o, "")).find(a) : e), f && f.apply(r, arguments)
		}, t.ajax(u), this
	};
	var C = encodeURIComponent;
	t.param = function(e, n) {
		var i = [];
		return i.add = function(e, n) {
			t.isFunction(n) && (n = n()), null == n && (n = ""), this.push(C(e) + "=" + C(n))
		}, j(i, e, n), i.join("&").replace(/%20/g, "+")
	}
}(Zepto), function(t) {
	t.fn.serializeArray = function() {
		var e, n, i = [],
			r = function(t) {
				return t.forEach ? t.forEach(r) : void i.push({
					name: e,
					value: t
				})
			};
		return this[0] && t.each(this[0].elements, function(i, o) {
			n = o.type, e = o.name, e && "fieldset" != o.nodeName.toLowerCase() && !o.disabled && "submit" != n && "reset" != n && "button" != n && "file" != n && ("radio" != n && "checkbox" != n || o.checked) && r(t(o).val())
		}), i
	}, t.fn.serialize = function() {
		var t = [];
		return this.serializeArray().forEach(function(e) {
			t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
		}), t.join("&")
	}, t.fn.submit = function(e) {
		if (0 in arguments) this.bind("submit", e);
		else if (this.length) {
			var n = t.Event("submit");
			this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit()
		}
		return this
	}
}(Zepto), function() {
	try {
		getComputedStyle(void 0)
	} catch (t) {
		var e = getComputedStyle;
		window.getComputedStyle = function(t) {
			try {
				return e(t)
			} catch (n) {
				return null
			}
		}
	}
}(), function(t) {
	function e(t, e) {
		var n = this.os = {},
			i = this.browser = {},
			r = t.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
			o = t.match(/(Android);?[\s\/]+([\d.]+)?/),
			s = !! t.match(/\(Macintosh\; Intel /),
			a = t.match(/(iPad).*OS\s([\d_]+)/),
			u = t.match(/(iPod)(.*OS\s([\d_]+))?/),
			f = !a && t.match(/(iPhone\sOS)\s([\d_]+)/),
			c = t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
			l = /Win\d{2}|Windows/.test(e),
			h = t.match(/Windows Phone ([\d.]+)/),
			p = c && t.match(/TouchPad/),
			d = t.match(/Kindle\/([\d.]+)/),
			m = t.match(/Silk\/([\d._]+)/),
			g = t.match(/(BlackBerry).*Version\/([\d.]+)/),
			v = t.match(/(BB10).*Version\/([\d.]+)/),
			y = t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
			w = t.match(/PlayBook/),
			b = t.match(/Chrome\/([\d.]+)/) || t.match(/CriOS\/([\d.]+)/),
			x = t.match(/Firefox\/([\d.]+)/),
			E = t.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/),
			T = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
			S = !b && t.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
			C = S || t.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);
		(i.webkit = !! r) && (i.version = r[1]), o && (n.android = !0, n.version = o[2]), f && !u && (n.ios = n.iphone = !0, n.version = f[2].replace(/_/g, ".")), a && (n.ios = n.ipad = !0, n.version = a[2].replace(/_/g, ".")), u && (n.ios = n.ipod = !0, n.version = u[3] ? u[3].replace(/_/g, ".") : null), h && (n.wp = !0, n.version = h[1]), c && (n.webos = !0, n.version = c[2]), p && (n.touchpad = !0), g && (n.blackberry = !0, n.version = g[2]), v && (n.bb10 = !0, n.version = v[2]), y && (n.rimtabletos = !0, n.version = y[2]), w && (i.playbook = !0), d && (n.kindle = !0, n.version = d[1]), m && (i.silk = !0, i.version = m[1]), !m && n.android && t.match(/Kindle Fire/) && (i.silk = !0), b && (i.chrome = !0, i.version = b[1]), x && (i.firefox = !0, i.version = x[1]), E && (n.firefoxos = !0, n.version = E[1]), T && (i.ie = !0, i.version = T[1]), C && (s || n.ios || l) && (i.safari = !0, n.ios || (i.version = C[1])), S && (i.webview = !0), n.tablet = !! (a || w || o && !t.match(/Mobile/) || x && t.match(/Tablet/) || T && !t.match(/Phone/) && t.match(/Touch/)), n.phone = !(n.tablet || n.ipod || !(o || f || c || g || v || b && t.match(/Android/) || b && t.match(/CriOS\/([\d.]+)/) || x && t.match(/Mobile/) || T && t.match(/Touch/)))
	}
	e.call(t, navigator.userAgent, navigator.platform), t.__detect = e
}(Zepto), function(t, e) {
	function v(t) {
		return t.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase()
	}

	function y(t) {
		return i ? i + t : t.toLowerCase()
	}
	var i, a, u, f, c, l, h, p, d, m, n = "",
		r = {
			Webkit: "webkit",
			Moz: "",
			O: "o"
		},
		o = document.createElement("div"),
		s = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
		g = {};
	t.each(r, function(t, r) {
		return o.style[t + "TransitionProperty"] !== e ? (n = "-" + t.toLowerCase() + "-", i = r, !1) : void 0
	}), a = n + "transform", g[u = n + "transition-property"] = g[f = n + "transition-duration"] = g[l = n + "transition-delay"] = g[c = n + "transition-timing-function"] = g[h = n + "animation-name"] = g[p = n + "animation-duration"] = g[m = n + "animation-delay"] = g[d = n + "animation-timing-function"] = "", t.fx = {
		off: i === e && o.style.transitionProperty === e,
		speeds: {
			_default: 400,
			fast: 200,
			slow: 600
		},
		cssPrefix: n,
		transitionEnd: y("TransitionEnd"),
		animationEnd: y("AnimationEnd")
	}, t.fn.animate = function(n, i, r, o, s) {
		return t.isFunction(i) && (o = i, r = e, i = e), t.isFunction(r) && (o = r, r = e), t.isPlainObject(i) && (r = i.easing, o = i.complete, s = i.delay, i = i.duration), i && (i = ("number" == typeof i ? i : t.fx.speeds[i] || t.fx.speeds._default) / 1e3), s && (s = parseFloat(s) / 1e3), this.anim(n, i, r, o, s)
	}, t.fn.anim = function(n, i, r, o, y) {
		var w, x, S, b = {},
			E = "",
			T = this,
			C = t.fx.transitionEnd,
			j = !1;
		if (i === e && (i = t.fx.speeds._default / 1e3), y === e && (y = 0), t.fx.off && (i = 0), "string" == typeof n) b[h] = n, b[p] = i + "s", b[m] = y + "s", b[d] = r || "linear", C = t.fx.animationEnd;
		else {
			x = [];
			for (w in n) s.test(w) ? E += w + "(" + n[w] + ") " : (b[w] = n[w], x.push(v(w)));
			E && (b[a] = E, x.push(a)), i > 0 && "object" == typeof n && (b[u] = x.join(", "), b[f] = i + "s", b[l] = y + "s", b[c] = r || "linear")
		}
		return S = function(e) {
			if ("undefined" != typeof e) {
				if (e.target !== e.currentTarget) return;
				t(e.target).unbind(C, S)
			} else t(this).unbind(C, S);
			j = !0, t(this).css(g), o && o.call(this)
		}, i > 0 && (this.bind(C, S), setTimeout(function() {
			j || S.call(T)
		}, 1e3 * (i + y) + 25)), this.size() && this.get(0).clientLeft, this.css(b), 0 >= i && setTimeout(function() {
			T.each(function() {
				S.call(this)
			})
		}, 0), this
	}, o = null
}(Zepto), function(t, e) {
	function a(n, i, r, o, s) {
		"function" != typeof i || s || (s = i, i = e);
		var a = {
			opacity: r
		};
		return o && (a.scale = o, n.css(t.fx.cssPrefix + "transform-origin", "0 0")), n.animate(a, i, null, s)
	}

	function u(e, n, i, r) {
		return a(e, n, 0, i, function() {
			o.call(t(this)), r && r.call(this)
		})
	}
	var n = window.document,
		r = (n.documentElement, t.fn.show),
		o = t.fn.hide,
		s = t.fn.toggle;
	t.fn.show = function(t, n) {
		return r.call(this), t === e ? t = 0 : this.css("opacity", 0), a(this, t, 1, "1,1", n)
	}, t.fn.hide = function(t, n) {
		return t === e ? o.call(this) : u(this, t, "0,0", n)
	}, t.fn.toggle = function(n, i) {
		return n === e || "boolean" == typeof n ? s.call(this, n) : this.each(function() {
			var e = t(this);
			e["none" == e.css("display") ? "show" : "hide"](n, i)
		})
	}, t.fn.fadeTo = function(t, e, n) {
		return a(this, t, e, null, n)
	}, t.fn.fadeIn = function(t, e) {
		var n = this.css("opacity");
		return n > 0 ? this.css("opacity", 0) : n = 1, r.call(this).fadeTo(t, n, e)
	}, t.fn.fadeOut = function(t, e) {
		return u(this, t, null, e)
	}, t.fn.fadeToggle = function(e, n) {
		return this.each(function() {
			var i = t(this);
			i[0 == i.css("opacity") || "none" == i.css("display") ? "fadeIn" : "fadeOut"](e, n)
		})
	}
}(Zepto), function(t) {
	var n, e = [];
	t.fn.remove = function() {
		return this.each(function() {
			this.parentNode && ("IMG" === this.tagName && (e.push(this), this.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=", n && clearTimeout(n), n = setTimeout(function() {
				e = []
			}, 6e4)), this.parentNode.removeChild(this))
		})
	}
}(Zepto), function(t) {
	function s(o, s) {
		var u = o[r],
			f = u && e[u];
		if (void 0 === s) return f || a(o);
		if (f) {
			if (s in f) return f[s];
			var c = i(s);
			if (c in f) return f[c]
		}
		return n.call(t(o), s)
	}

	function a(n, o, s) {
		var a = n[r] || (n[r] = ++t.uuid),
			f = e[a] || (e[a] = u(n));
		return void 0 !== o && (f[i(o)] = s), f
	}

	function u(e) {
		var n = {};
		return t.each(e.attributes || o, function(e, r) {
			0 == r.name.indexOf("data-") && (n[i(r.name.replace("data-", ""))] = t.zepto.deserializeValue(r.value))
		}), n
	}
	var e = {},
		n = t.fn.data,
		i = t.camelCase,
		r = t.expando = "Zepto" + +new Date,
		o = [];
	t.fn.data = function(e, n) {
		return void 0 === n ? t.isPlainObject(e) ? this.each(function(n, i) {
			t.each(e, function(t, e) {
				a(i, t, e)
			})
		}) : 0 in this ? s(this[0], e) : void 0 : this.each(function() {
			a(this, e, n)
		})
	}, t.fn.removeData = function(n) {
		return "string" == typeof n && (n = n.split(/\s+/)), this.each(function() {
			var o = this[r],
				s = o && e[o];
			s && t.each(n || s, function(t) {
				delete s[n ? i(this) : t]
			})
		})
	}, ["remove", "empty"].forEach(function(e) {
		var n = t.fn[e];
		t.fn[e] = function() {
			var t = this.find("*");
			return "remove" === e && (t = t.add(this)), t.removeData(), n.call(this)
		}
	})
}(Zepto), function(t) {
	function n(e) {
		var i = [
			["resolve", "done", t.Callbacks({
				once: 1,
				memory: 1
			}), "resolved"],
			["reject", "fail", t.Callbacks({
				once: 1,
				memory: 1
			}), "rejected"],
			["notify", "progress", t.Callbacks({
				memory: 1
			})]
		],
			r = "pending",
			o = {
				state: function() {
					return r
				},
				always: function() {
					return s.done(arguments).fail(arguments), this
				},
				then: function() {
					var e = arguments;
					return n(function(n) {
						t.each(i, function(i, r) {
							var a = t.isFunction(e[i]) && e[i];
							s[r[1]](function() {
								var e = a && a.apply(this, arguments);
								if (e && t.isFunction(e.promise)) e.promise().done(n.resolve).fail(n.reject).progress(n.notify);
								else {
									var i = this === o ? n.promise() : this,
										s = a ? [e] : arguments;
									n[r[0] + "With"](i, s)
								}
							})
						}), e = null
					}).promise()
				},
				promise: function(e) {
					return null != e ? t.extend(e, o) : o
				}
			},
			s = {};
		return t.each(i, function(t, e) {
			var n = e[2],
				a = e[3];
			o[e[1]] = n.add, a && n.add(function() {
				r = a
			}, i[1 ^ t][2].disable, i[2][2].lock), s[e[0]] = function() {
				return s[e[0] + "With"](this === s ? o : this, arguments), this
			}, s[e[0] + "With"] = n.fireWith
		}), o.promise(s), e && e.call(s, s), s
	}
	var e = Array.prototype.slice;
	t.when = function(i) {
		var f, c, l, r = e.call(arguments),
			o = r.length,
			s = 0,
			a = 1 !== o || i && t.isFunction(i.promise) ? o : 0,
			u = 1 === a ? i : n(),
			h = function(t, n, i) {
				return function(r) {
					n[t] = this, i[t] = arguments.length > 1 ? e.call(arguments) : r, i === f ? u.notifyWith(n, i) : --a || u.resolveWith(n, i)
				}
			};
		if (o > 1) for (f = new Array(o), c = new Array(o), l = new Array(o); o > s; ++s) r[s] && t.isFunction(r[s].promise) ? r[s].promise().done(h(s, l, r)).fail(u.reject).progress(h(s, c, f)) : --a;
		return a || u.resolveWith(l, r), u.promise()
	}, t.Deferred = n
}(Zepto), function(t) {
	t.Callbacks = function(e) {
		e = t.extend({}, e);
		var n, i, r, o, s, a, u = [],
			f = !e.once && [],
			c = function(t) {
				for (n = e.memory && t, i = !0, a = o || 0, o = 0, s = u.length, r = !0; u && s > a; ++a) if (u[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
					n = !1;
					break
				}
				r = !1, u && (f ? f.length && c(f.shift()) : n ? u.length = 0 : l.disable())
			},
			l = {
				add: function() {
					if (u) {
						var i = u.length,
							a = function(n) {
								t.each(n, function(t, n) {
									"function" == typeof n ? e.unique && l.has(n) || u.push(n) : n && n.length && "string" != typeof n && a(n)
								})
							};
						a(arguments), r ? s = u.length : n && (o = i, c(n))
					}
					return this
				},
				remove: function() {
					return u && t.each(arguments, function(e, n) {
						for (var i;
						(i = t.inArray(n, u, i)) > -1;) u.splice(i, 1), r && (s >= i && --s, a >= i && --a)
					}), this
				},
				has: function(e) {
					return !(!u || !(e ? t.inArray(e, u) > -1 : u.length))
				},
				empty: function() {
					return s = u.length = 0, this
				},
				disable: function() {
					return u = f = n = void 0, this
				},
				disabled: function() {
					return !u
				},
				lock: function() {
					return f = void 0, n || l.disable(), this
				},
				locked: function() {
					return !f
				},
				fireWith: function(t, e) {
					return !u || i && !f || (e = e || [], e = [t, e.slice ? e.slice() : e], r ? f.push(e) : c(e)), this
				},
				fire: function() {
					return l.fireWith(this, arguments)
				},
				fired: function() {
					return !!i
				}
			};
		return l
	}
}(Zepto), function(t) {
	function r(e) {
		return e = t(e), !(!e.width() && !e.height()) && "none" !== e.css("display")
	}

	function f(t, e) {
		t = t.replace(/=#\]/g, '="#"]');
		var n, i, r = s.exec(t);
		if (r && r[2] in o && (n = o[r[2]], i = r[3], t = r[1], i)) {
			var a = Number(i);
			i = isNaN(a) ? i.replace(/^["']|["']$/g, "") : a
		}
		return e(t, n, i)
	}
	var e = t.zepto,
		n = e.qsa,
		i = e.matches,
		o = t.expr[":"] = {
			visible: function() {
				return r(this) ? this : void 0
			},
			hidden: function() {
				return r(this) ? void 0 : this
			},
			selected: function() {
				return this.selected ? this : void 0
			},
			checked: function() {
				return this.checked ? this : void 0
			},
			parent: function() {
				return this.parentNode
			},
			first: function(t) {
				return 0 === t ? this : void 0
			},
			last: function(t, e) {
				return t === e.length - 1 ? this : void 0
			},
			eq: function(t, e, n) {
				return t === n ? this : void 0
			},
			contains: function(e, n, i) {
				return t(this).text().indexOf(i) > -1 ? this : void 0
			},
			has: function(t, n, i) {
				return e.qsa(this, i).length ? this : void 0
			}
		},
		s = new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),
		a = /^\s*>/,
		u = "Zepto" + +new Date;
	e.qsa = function(i, r) {
		return f(r, function(o, s, f) {
			try {
				var c;
				!o && s ? o = "*" : a.test(o) && (c = t(i).addClass(u), o = "." + u + " " + o);
				var l = n(i, o)
			} catch (h) {
				throw console.error("error performing selector: %o", r), h
			} finally {
				c && c.removeClass(u)
			}
			return s ? e.uniq(t.map(l, function(t, e) {
				return s.call(t, e, l, f)
			})) : l
		})
	}, e.matches = function(t, e) {
		return f(e, function(e, n, r) {
			return !(e && !i(t, e) || n && n.call(t, null, r) !== t)
		})
	}
}(Zepto), function(t) {
	function f(t, e, n, i) {
		return Math.abs(t - e) >= Math.abs(n - i) ? t - e > 0 ? "Left" : "Right" : n - i > 0 ? "Up" : "Down"
	}

	function c() {
		o = null, e.last && (e.el && e.el.trigger("longTap"), e = {})
	}

	function l() {
		o && clearTimeout(o), o = null
	}

	function h() {
		n && clearTimeout(n), i && clearTimeout(i), r && clearTimeout(r), o && clearTimeout(o), n = i = r = o = null, e = {}
	}

	function p(t) {
		return ("touch" == t.pointerType || t.pointerType == t.MSPOINTER_TYPE_TOUCH) && t.isPrimary
	}

	function d(t, e) {
		return t.type == "pointer" + e || t.type.toLowerCase() == "mspointer" + e
	} {
		var n, i, r, o, a, e = {},
			s = 750;
		navigator.userAgent.match(/Android/i)
	}
	t(document).ready(function() {
		var u, m, y, w, g = 0,
			v = 0;
		"MSGesture" in window && (a = new MSGesture, a.target = document.body), t(document).bind("MSGestureEnd", function(t) {
			var n = t.velocityX > 1 ? "Right" : t.velocityX < -1 ? "Left" : t.velocityY > 1 ? "Down" : t.velocityY < -1 ? "Up" : null;
			n && (e.el && e.el.trigger("swipe"), e.el && e.el.trigger("swipe" + n))
		}).on("touchstart MSPointerDown pointerdown", function(i) {
			(!(w = d(i, "down")) || p(i)) && (y = w ? i : i.touches[0], i.touches && 1 === i.touches.length && e.x2 && (e.x2 = void 0, e.y2 = void 0), u = Date.now(), m = u - (e.last || u), e.el = t("tagName" in y.target ? y.target : y.target.parentNode), n && clearTimeout(n), e.x1 = y.pageX, e.y1 = y.pageY, m > 0 && 250 >= m && (e.isDoubleTap = !0), e.last = u, o = setTimeout(c, s), a && w && a.addPointer(i.pointerId))
		}).on("touchmove MSPointerMove pointermove", function(t) {
			(!(w = d(t, "move")) || p(t)) && (y = w ? t : t.touches[0], l(), e.x2 = y.pageX, e.y2 = y.pageY, g += Math.abs(e.x1 - e.x2), v += Math.abs(e.y1 - e.y2))
		}).on("touchend MSPointerUp pointerup", function(o) {
			(!(w = d(o, "up")) || p(o)) && (l(), e.x2 && Math.abs(e.x1 - e.x2) > 30 || e.y2 && Math.abs(e.y1 - e.y2) > 30 ? r = setTimeout(function() {
				e.el && e.el.trigger("swipe"), e.el && e.el.trigger("swipe" + f(e.x1, e.x2, e.y1, e.y2)), e = {}
			}, 0) : "last" in e && (30 > g && 30 > v ? i = setTimeout(function() {
				var i = t.Event("tap");
				i.cancelTouch = h, e.el && e.el.trigger(i), e.isDoubleTap ? (e.el && e.el.trigger("doubleTap"), e = {}) : n = setTimeout(function() {
					n = null, e.el && e.el.trigger("singleTap"), e = {}
				}, 250)
			}, 0) : e = {}), g = v = 0)
		}).on("touchcancel MSPointerCancel pointercancel", h), t(window).on("scroll", h)
	}), ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function(e) {
		t.fn[e] = function(t) {
			return this.on(e, t)
		}
	})
}(Zepto), function(t) {
	function i(t) {
		return "tagName" in t ? t : t.parentNode
	}
	if (t.os.ios) {
		var n, e = {};
		t(document).bind("gesturestart", function(t) {
			{
				var r = Date.now();
				r - (e.last || r)
			}
			e.target = i(t.target), n && clearTimeout(n), e.e1 = t.scale, e.last = r
		}).bind("gesturechange", function(t) {
			e.e2 = t.scale
		}).bind("gestureend", function() {
			e.e2 > 0 ? (0 != Math.abs(e.e1 - e.e2) && t(e.target).trigger("pinch") && t(e.target).trigger("pinch" + (e.e1 - e.e2 > 0 ? "In" : "Out")), e.e1 = e.e2 = e.last = 0) : "last" in e && (e = {})
		}), ["pinch", "pinchIn", "pinchOut"].forEach(function(e) {
			t.fn[e] = function(t) {
				return this.bind(e, t)
			}
		})
	}
}(Zepto), function(t) {
	t.fn.end = function() {
		return this.prevObject || t()
	}, t.fn.andSelf = function() {
		return this.add(this.prevObject || t())
	}, "filter,add,not,eq,first,last,find,closest,parents,parent,children,siblings".split(",").forEach(function(e) {
		var n = t.fn[e];
		t.fn[e] = function() {
			var t = n.apply(this, arguments);
			return t.prevObject = this, t
		}
	})
}(Zepto), function(t) {
	String.prototype.trim === t && (String.prototype.trim = function() {
		return this.replace(/^\s+|\s+$/g, "")
	}), Array.prototype.reduce === t && (Array.prototype.reduce = function(e) {
		if (void 0 === this || null === this) throw new TypeError;
		var o, n = Object(this),
			i = n.length >>> 0,
			r = 0;
		if ("function" != typeof e) throw new TypeError;
		if (0 == i && 1 == arguments.length) throw new TypeError;
		if (arguments.length >= 2) o = arguments[1];
		else for (;;) {
			if (r in n) {
				o = n[r++];
				break
			}
			if (++r >= i) throw new TypeError
		}
		for (; i > r;) r in n && (o = e.call(t, o, n[r], r, n)), r++;
		return o
	})
}();
