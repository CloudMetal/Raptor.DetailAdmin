using System;
using System.Linq;

namespace Raptor.DetailAdmin {
    public class MenuIcon {
        public static string GetMenuIcon(string menutext) {
            if (menutext.Contains("blog"))
                return "rss";
            else if (menutext.Contains("comment"))
                return "comments-alt";
            else if (menutext.Contains("contact"))
                return "phone";
            else if (menutext.Contains("dashboard"))
                return "dashboard";
            else if (menutext.Contains("definition"))
                return "cogs";
            else if (menutext.Contains("email"))
                return "envelope-alt";
            else if (menutext.Contains("index"))
                return "archive";
            else if (menutext.Contains("storage"))
                return "folder-open-alt";
            else if (menutext.Contains("media") || menutext.Contains("gallery"))
                return "picture";
            else if (menutext.Contains("module"))
                return "signin";
            else if (menutext.Contains("navigation"))
                return "indent-right";
            else if (menutext.Contains("page") || menutext.Contains("post"))
                return "file-text-alt";
            else if (menutext.Contains("performance"))
                return "bar-chart";
            else if (menutext.Contains("profile"))
                return "credit-card";
            else if (menutext.Contains("projection"))
                return "facetime-video";
            else if (menutext.Contains("query") || menutext.Contains("queries"))
                return "filter";
            else if (menutext.Contains("report"))
                return "bar-chart";
            else if (menutext.Contains("setting"))
                return "cog";
            else if (menutext.Contains("search"))
                return "search";
            else if (menutext.Contains("spam"))
                return "bug";
            else if (menutext.Contains("tag") || menutext.Contains("taxonomy") || menutext.Contains("taxonomies"))
                return "tags";
            else if (menutext.Contains("theme"))
                return "desktop";
            else if (menutext.Contains("user"))
                return "user";
            else if (menutext.Contains("widget"))
                return "list-alt";
            else if (menutext.Contains("workflow"))
                return "sitemap";
            // these need to remain at the bottom
            else if (menutext.Contains("content"))
                return "file-alt";
            else if (menutext.Contains("new"))
                return "plus-sign-alt";
            else
                return "map-marker";
        }
    }
}