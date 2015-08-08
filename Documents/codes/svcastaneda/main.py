from google.appengine.ext import ndb
from google.appengine.api import users
import webapp2
import jinja2
import os


jinja_environment = jinja2.Environment(loader=
    jinja2.FileSystemLoader(os.path.dirname(__file__)))



class HomeHandler(webapp2.RequestHandler):
    def get(self):
        user = users.get_current_user()

    
        if user:
            template_values = {user}
            greeting = ('Welcome, %s! (<a href="%s">sign out</a>)' %
                        (user.nickname(), users.create_logout_url('/')))
        else:
            greeting = ('<a href="%s">Sign in or register</a>.' %
                        users.create_login_url('/'))

            self.response.out.write("<html><body>%s</body></html>" % greeting)
    
        template = jinja_environment.get_template('templates/home.html') 
        self.response.out.write(template.render())

class ResumeModel(ndb.Model):
    gpa = ndb.FloatProperty("GPA", required=True)
    skills = ndb.StringProperty("Skills", required=True)
    xp = ndb.StringProperty("Experiences", required=True)
    wins = ndb.StringProperty("Accomplishments", required=True)
    extras = ndb.StringProperty("Activities", required=True)

class ResumeHandler(webapp2.RequestHandler):
    def get(self):
        template_values = {}

        template = jinja_environment.get_template('templates/resume.html') 
        self.response.out.write(template.render(template_values))

class EditResumeHandler(webapp2.RequestHandler):
    def get(self):
        user = users.get_current_user()
    
        model = ResumeModel
        listFields = ('gpa', 'skills', 'xp', 'wins', 'extras')
        editFields = ('gpa', 'skills', 'xp', 'wins', 'extras')
    
        if user:
            print 'Welcome, %s!' % user.nickname()
            template_values={"logout_url":users.create_logout_url('/')}
            
        template = jinja_environment.get_template('templates/resume.html') 
        self.response.out.write(template.render(template_values))

class ProjectsHandler(webapp2.RequestHandler):
    def get(self):
        template_values = {}

        template = jinja_environment.get_template('templates/projects.html') 
        self.response.out.write(template.render(template_values))
        
class ContactHandler(webapp2.RequestHandler):
    def get(self):
        template_values = {}

        template = jinja_environment.get_template('templates/contact.html') 
        self.response.out.write(template.render(template_values))
        

    

routes = [
    ('/', HomeHandler),
    ('/resume', EditResumeHandler),
    ('/projects', ProjectsHandler),
    ('/contact', ContactHandler),
    # (r'^(/admin)(.*)$', appengine_admin.Admin),
    (r'^resume/(?P<pk>[0-9]+)/edit/$', EditResumeHandler),
]

app = webapp2.WSGIApplication(routes, debug=True)