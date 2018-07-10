from django import template

register = template.Library()


@register.simple_tag
def comment_tree(comments):
    html_els = '''<ul class="children">'''
    for item in comments:
        row = '''
                         <li uid="%s" class="comment byuser comment-author-jspang001 bypostauthor odd alt depth-2">
                                <div class="comt-avatar">
                                    <img data-src="https://secure.gravatar.com/avatar/774555ea0f0ea3a59b61748c53c99fba?s=100&amp;d=mm" class="avatar avatar-100" height="50" width="50" src="https://secure.gravatar.com/avatar/774555ea0f0ea3a59b61748c53c99fba?s=100&amp;d=mm" style="display: block;">
                                </div>
                                <div class="comt-main" id="div-comment-5744">
                                        <p>%s</p>
                                        <div class="comt-meta">
                                            <span class="comt-author"><a href="http://jspang.com" rel="external nofollow" class="url" target="_blank">
                                               %s
                                            </a>
                                            </span> %s
                                            <a rel="nofollow" class="comment-reply-link" href="javascript:;" aria-label="回复给技术胖">
                                                回复
                                            </a>
                                        </div>
                                </div>
                            <ul class="children"></ul></li>   
                    ''' % (item['commentUUID'], item['commentContent'], 'admin', item['commentTime'])
        html_els += row
        if item['child']:
            html_els = generate_html(html_els, item['child'])
    html_els += '</ul>'
    return html_els


def generate_html(templates, comments):
    for item in comments:
        row = '''<ul class="children">
                            <li uid="%s" class="comment byuser comment-author-jspang001 bypostauthor odd alt depth-2">
                                   <div class="comt-avatar">
                                       <img data-src="https://secure.gravatar.com/avatar/774555ea0f0ea3a59b61748c53c99fba?s=100&amp;d=mm" class="avatar avatar-100" height="50" width="50" src="https://secure.gravatar.com/avatar/774555ea0f0ea3a59b61748c53c99fba?s=100&amp;d=mm" style="display: block;">
                                   </div>
                                   <div class="comt-main" id="div-comment-5744">
                                           <p>%s</p>
                                           <div class="comt-meta">
                                               <span class="comt-author"><a href="http://jspang.com" rel="external nofollow" class="url" target="_blank">
                                                  %s
                                               </a>
                                               </span> %s
                                               <a rel="nofollow" class="comment-reply-link" href="javascript:;" aria-label="回复给技术胖">
                                                   回复
                                               </a>
                                           </div>
                                   </div>
                                <ul class="children"></ul></li>  
                   </ul>             
                       ''' % (item['commentUUID'], item['commentContent'], 'admin', item['commentTime'])
        templates += row
    return templates
