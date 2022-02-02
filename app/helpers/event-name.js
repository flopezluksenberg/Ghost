import {helper} from '@ember/component/helper';

export const AVAILABLE_EVENTS = [
    // GROUPNAME: Global
    {event: 'site.changed', name: 'Sitio recreado', group: 'Global'},

    // GROUPNAME: Posts
    {event: 'post.added', name: 'Publicacion Creada', group: 'Posts'},
    {event: 'post.deleted', name: 'Publicacion Eliminada', group: 'Posts'},
    {event: 'post.edited', name: 'Publicacion Editada', group: 'Posts'},
    {event: 'post.published', name: 'Publicacion Lanzada', group: 'Posts'},
    {event: 'post.published.edited', name: 'Publicacion Lanzada Actualizada', group: 'Posts'},
    {event: 'post.unpublished', name: 'Publicacion dada de baja', group: 'Posts'},
    {event: 'post.tag.attached', name: 'Etiqueta agregada a una publicacion', group: 'Posts'},
    {event: 'post.tag.detached', name: 'Etiquete eliminada de una publicacion', group: 'Posts'},

    // GROUPNAME: Pages
    {event: 'page.added', name: 'Pagina Creada', group: 'Pages'},
    {event: 'page.deleted', name: 'Pagina Eliminada', group: 'Pages'},
    {event: 'page.edited', name: 'Pagina Actualizada', group: 'Pages'},
    {event: 'page.published', name: 'Pagina Publicada', group: 'Pages'},
    {event: 'page.published.edited', name: 'Pagina Publicada Actualizada', group: 'Pages'},
    {event: 'page.unpublished', name: 'Pagina dada de baja', group: 'Pages'},
    {event: 'page.tag.attached', name: 'Etiqueta agregada a una pagina', group: 'Pages'},
    {event: 'page.tag.detached', name: 'Etiqueta eliminada de una pagina', group: 'Pages'},

    // GROUPNAME: Tags
    {event: 'tag.added', name: 'Etiqueta Creada', group: 'Tags'},
    {event: 'tag.edited', name: 'Etiqueta Editada', group: 'Tags'},
    {event: 'tag.deleted', name: 'Etiqueta Eliminada', group: 'Tags'},

    // GROUPNAME: Members
    {event: 'member.added', name: 'Miembro agregado', group: 'Members'},
    {event: 'member.edited', name: 'Miembro actualizado', group: 'Members'},
    {event: 'member.deleted', name: 'Miembro eliminado', group: 'Members'}
];

export function eventName([event]/*, hash*/) {
    let match = AVAILABLE_EVENTS.findBy('event', event);

    return match ? match.name : event;
}

export default helper(eventName);
