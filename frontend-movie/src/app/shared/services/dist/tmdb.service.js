"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TmdbService = void 0;
var core_1 = require("@angular/core");
var environment_1 = require("../../../environments/environment");
// import { MovieVideosModel } from '../../../models/movie-videos.model';
// import { TvCreditsModel } from '../../models/tv-credits.model';
var TmdbService = /** @class */ (function () {
    function TmdbService(http) {
        this.http = http;
        this.API_KEY = environment_1.environment.API_KEY;
        this.URL_DISCOVER = 'https://api.themoviedb.org/3/discover/movie';
        this.URL_SEARCH = 'https://api.themoviedb.org/3/search/movie';
        this.URL_MOVIE = 'https://api.themoviedb.org/3/movie';
        this.URL_PERSON = 'https://api.themoviedb.org/3/person';
        this.URL_GENRE = 'https://api.themoviedb.org/3/genre';
    }
    TmdbService.prototype.getSearchMovie = function (name, page, lang, adult) {
        return this.http.get("\n      " + this.URL_SEARCH + "?api_key=" + this.API_KEY + "&language=" + lang + "&query=" + name + "&page=" + page + "&include_adult=" + adult + "\n    ");
    };
    TmdbService.prototype.getNowPlaying = function (page, lang) {
        return this.http.get(this.URL_MOVIE + "/now_playing?api_key=" + this.API_KEY + "&language=" + lang + "&page=" + page);
    };
    TmdbService.prototype.getDetailsMovie = function (movieID, lang) {
        return this.http.get(this.URL_MOVIE + "/" + movieID + "?api_key=" + this.API_KEY + "&language=" + lang);
    };
    TmdbService.prototype.getMovieDiscover = function (page, lang, adult) {
        return this.http.get("\n      " + this.URL_DISCOVER + "?api_key=" + this.API_KEY + "&language=" + lang + "&sort_by=popularity.desc&page=" + page + "&include_adult=" + adult + "\n    ");
    };
    TmdbService.prototype.getCastMovie = function (movieID) {
        return this.http.get(this.URL_MOVIE + "/" + movieID + "/credits?api_key=" + this.API_KEY);
    };
    TmdbService.prototype.getVideoMovie = function (movieID, lang) {
        return this.http.get(this.URL_MOVIE + "/" + movieID + "/videos?api_key=" + this.API_KEY + "&language=" + lang);
    };
    TmdbService.prototype.getGenreMovie = function (genreID, page, lang, adult) {
        return this.http.get("\n      " + this.URL_GENRE + "/" + genreID + "/movies?api_key=" + this.API_KEY + "&language=" + lang + "&page=" + page + "&include_adult=" + adult + "\n    ");
    };
    TmdbService.prototype.getSimilarMovies = function (movieID, lang) {
        return this.http.get(this.URL_MOVIE + "/" + movieID + "/similar?api_key=" + this.API_KEY + "&language=" + lang);
    };
    TmdbService.prototype.getUpComing = function (page, lang) {
        return this.http.get(this.URL_MOVIE + "/upcoming?api_key=" + this.API_KEY + "&language=" + lang + "&page=" + page);
    };
    TmdbService.prototype.getPerson = function (personID, lang) {
        return this.http.get(this.URL_PERSON + "/" + personID + "?api_key=" + this.API_KEY + "&language=" + lang);
    };
    TmdbService.prototype.getPersonMovies = function (personID, lang) {
        return this.http.get(this.URL_PERSON + "/" + personID + "/movie_credits?api_key=" + this.API_KEY + "&language=" + lang);
    };
    TmdbService.prototype.getPersonTv = function (personID, lang) {
        return this.http.get(this.URL_PERSON + "/" + personID + "/tv_credits?api_key=" + this.API_KEY + "&language=" + lang);
    };
    TmdbService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], TmdbService);
    return TmdbService;
}());
exports.TmdbService = TmdbService;
