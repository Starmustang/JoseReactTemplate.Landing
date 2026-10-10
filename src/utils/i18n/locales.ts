/**
 * Landing copy, written for the person deciding to buy: the dentist who runs the
 * practice. Every claim maps to something the shipped product does (see
 * `utils/constants/product.ts`); nothing here is an invented metric or quote.
 *
 * The Telegram strings (`day.telegram*`) are the bot's literal production copy,
 * so they stay in Spanish in both languages.
 */
export const resources = {
  es: {
    translation: {
      meta: {
        title: 'N. Florentino software — Menos teléfono, más tiempo con sus pacientes',
        description:
          'Agenda, fichas de pacientes y odontograma en un solo lugar para su consultorio dental. Sus pacientes reservan, cambian o cancelan su cita por Telegram, a cualquier hora y sin llamar.',
      },
      nav: {
        day: 'Su día',
        odontogram: 'Odontograma',
        schedule: 'Agenda',
        booking: 'Reservas',
        roadmap: 'En camino',
        pricing: 'Precio',
        cta: 'Ver el recorrido',
        menu: 'Menú',
      },
      photos: {
        hero: 'Dos doctores revisan junto a un paciente la radiografía de su dentadura en una pantalla del consultorio.',
        odontogram: 'Un dentista examina los dientes de una paciente con un espejo dental.',
        modules: 'Una persona muestra dos cepillos de dientes al frente.',
        roadmap: 'Un dentista sostiene un modelo de dentadura para explicar un tratamiento.',
      },
      hero: {
        eyebrow: 'Para consultorios dentales',
        title: 'Menos tiempo al teléfono.\nMás tiempo con sus pacientes.',
        body: 'La agenda, las fichas de sus pacientes y el odontograma, en un solo lugar. Y mientras usted atiende, sus pacientes reservan su propia cita por Telegram — a cualquier hora, sin llamar a la recepción.',
        primary: 'Ver el recorrido',
        secondary: 'Cómo reserva un paciente',
        proof: 'En uso en la Clínica Breton Otaño.',
        videoCaption: 'Recorrido general · 22 segundos',
      },
      day: {
        eyebrow: 'Un día en su consultorio',
        title: 'Pensado para cómo trabaja una clínica de verdad.',
        body: 'No es un programa más que aprender. Es el mismo día de siempre, con menos llamadas, menos papeles y menos huecos en la agenda.',
        moments: [
          {
            time: '8:00',
            title: 'Abre la agenda y ya sabe cómo viene el día',
            body: 'Cada cita con su estado: quién confirmó, quién está pendiente y quién reservó por su cuenta.',
          },
          {
            time: '10:30',
            title: 'Con el paciente en el sillón',
            body: 'Su ficha a la vista — alergias, tratamientos anteriores y el odontograma de cada diente.',
          },
          {
            time: '14:00',
            title: 'La recepción deja de vivir en el teléfono',
            body: 'Los pacientes reservan, cambian o cancelan solos. Su equipo atiende a quien está en la sala.',
          },
          {
            time: '23:00',
            title: 'Alguien reserva mientras usted descansa',
            body: 'La cita aparece en la agenda, y el sistema le recuerda al paciente un día antes y una hora antes.',
          },
        ],
        chatCaption: 'Así le escribe el asistente a sus pacientes, palabra por palabra.',
        telegramWelcome: '¡Bienvenido! Comparta su número de teléfono para poder identificarlo.',
        telegramShare: 'Compartir mi número de teléfono',
        telegramBack: '¡Bienvenido de nuevo, María!',
        telegramMenu: ['Agendar Cita', 'Ver Citas', 'Reagendar Cita', 'Cancelar Cita'],
        telegramConfirmed: '✅ Cita agendada exitosamente para el 2026-09-24 a las 10:00 AM.',
        telegramTag: 'por Telegram',
      },
      odontogram: {
        eyebrow: 'Odontograma',
        title: 'Cada diente, con su historia.',
        body: 'Marque caries, coronas o endodoncias superficie por superficie, con la nomenclatura FDI que ya usa. Cada tratamiento queda guardado en el historial del diente, listo para la próxima consulta.',
        chartTitle: 'Odontograma',
        chartHint: '32 dientes · nomenclatura FDI',
        demoTitle: 'Pruébelo aquí',
        demoBody:
          'Elija un estado y toque una superficie del diente. Es exactamente como funciona en el sistema.',
        demoTooth: 'Diente',
        selectedStatus: 'Estado elegido',
        surfacesLabel: 'Cinco superficies',
        paletteLabel: 'Doce estados clínicos',
        paintHint: 'Toque una superficie',
        clear: 'Limpiar',
        regressionTitle: 'El historial no da marcha atrás',
        regressionBody:
          'Si un diente tiene corona y después se le hace una limpieza, la corona sigue ahí. Un tratamiento menor nunca borra uno mayor.',
        priorityLabel: 'Prioridad',
      },
      schedule: {
        eyebrow: 'Agenda',
        title: 'Una agenda que no se pisa.',
        body: 'Vea la semana completa con cada cita según su estado. El sistema solo ofrece horas que realmente están libres, así que nunca hay dos pacientes a la misma hora.',
        rulesTitle: 'Antes de ofrecer una hora, revisa',
        rules: [
          'el horario de la clínica',
          'el horario de cada doctor',
          'feriados y días libres',
          'que no haya otra cita',
        ],
        legendTitle: 'Estados de una cita',
        realtime: 'Cuando un paciente reserva por Telegram, la cita aparece en la pantalla de su recepción al momento.',
        slots: 'Citas cada 30 minutos · el paciente ve las próximas dos semanas',
      },
      workflow: {
        eyebrow: 'Reservas por Telegram',
        title: 'Su paciente reserva en seis pasos.',
        body: 'Sin llamar y sin instalar nada: su paciente ya tiene Telegram. Responde seis preguntas sencillas y solo ve los horarios que existen. Si se equivoca, vuelve un paso atrás.',
        stepsTitle: 'Los seis pasos',
        steps: ['Clínica', 'Tratamiento', 'Doctor', 'Fecha', 'Hora', 'Motivo'],
        videoCaption: 'Así reserva un paciente · 31 segundos',
        notes: [
          'Comparte su teléfono una sola vez; desde entonces el asistente lo reconoce.',
          'Si es un paciente nuevo, se registra en el momento con su nombre.',
          'Solo ve a los doctores que hacen el tratamiento que eligió.',
          'La cita llega a su agenda como pendiente, marcada como reservada por Telegram.',
        ],
        remindersTitle: 'Recordatorios automáticos',
        reminders: [
          { name: 'El día anterior', when: 'a las 9:00' },
          { name: 'Una hora antes', when: 'de la cita' },
        ],
      },
      modules: {
        eyebrow: 'Todo incluido',
        title: 'Lo que su consultorio necesita, en un solo sistema.',
        body: 'Su equipo aprende una pantalla y ya sabe usar las demás: todas funcionan igual.',
        videoCaption: 'Los módulos · 26 segundos',
        items: [
          {
            title: 'Agenda',
            body: 'La semana de cada doctor, con el estado de cada cita.',
          },
          {
            title: 'Fichas de pacientes',
            body: 'Contacto, documento, alergias, citas y tratamientos en un mismo lugar.',
          },
          {
            title: 'Odontograma',
            body: 'Los 32 dientes, superficie por superficie, con su historial.',
          },
          {
            title: 'Doctores y especialidades',
            body: 'Cada doctor con sus horarios, sus días libres y lo que atiende.',
          },
          {
            title: 'Una o varias sedes',
            body: 'Horarios y días de cierre propios para cada clínica.',
          },
          {
            title: 'Tratamientos y costos',
            body: 'Cada tratamiento con su precio y su duración, que define cuánto dura la cita.',
          },
          {
            title: 'Avisos a sus pacientes',
            body: 'Envíe un mensaje por Telegram a todos sus pacientes a la vez.',
          },
          {
            title: 'Accesos para su equipo',
            body: 'Cada persona ve y hace solo lo que le corresponde.',
          },
        ],
      },
      journey: {
        eyebrow: 'El recorrido',
        title: 'Del primer mensaje al sillón.',
        body: 'Un paciente entra por Telegram y sale con su próxima cita agendada. Esto es lo que pasa en el medio, sin que su equipo toque el teléfono.',
        step: 'Paso',
        steps: [
          {
            label: 'Reserva',
            title: 'El paciente reserva solo.',
            body: 'Escribe al asistente por Telegram y elige clínica, tratamiento, doctor, fecha y hora. Solo ve las horas que de verdad están libres.',
          },
          {
            label: 'Confirmación',
            title: 'La cita entra a la agenda.',
            body: 'Aparece como pendiente y marcada como reservada por Telegram. Su recepción la ve al momento, sin llamadas.',
          },
          {
            label: 'Recordatorio',
            title: 'El sistema le avisa.',
            body: 'Un día antes y una hora antes, el paciente recibe su recordatorio. Menos huecos por olvido.',
          },
          {
            label: 'En el sillón',
            title: 'Su ficha, a la vista.',
            body: 'Con el paciente sentado, abre su historial: alergias, tratamientos anteriores y el odontograma de cada diente.',
          },
          {
            label: 'Tratamiento',
            title: 'Cada diente, con su historia.',
            body: 'Marque lo que se hizo superficie por superficie. Queda guardado, y el historial nunca da marcha atrás.',
          },
          {
            label: 'Seguimiento',
            title: 'La próxima cita, antes de irse.',
            body: 'Agende la siguiente visita ahí mismo, con el mismo asistente que ya conoce al paciente.',
          },
        ],
      },
      roadmap: {
        eyebrow: 'En camino',
        title: 'Lo que sigue para su consultorio.',
        body: 'Esto es lo que estamos construyendo ahora. Si algo de aquí le hace falta, cuéntenos — también ordena el camino.',
        chip: 'En desarrollo',
        items: [
          {
            title: 'Citas completas por WhatsApp',
            body: 'El mismo recorrido que hoy hacen sus pacientes por Telegram — reservar, ver, reagendar y cancelar su cita — en el WhatsApp que ya usan.',
          },
          {
            title: 'Planes de tratamiento',
            body: 'Agrupe los tratamientos que un paciente necesita en un solo plan, con sus costos, para presentarlo y acordarlo en la consulta.',
          },
          {
            title: 'Por etapas, visita a visita',
            body: 'Divida cada plan en etapas y siga su avance en cada visita: qué se hizo, qué sigue y qué quedó pendiente.',
          },
        ],
      },
      pricing: {
        eyebrow: 'Precio',
        title: 'Un precio a la medida de su consultorio.',
        body: 'Sin planes cerrados ni cobros por usuario. Cotizamos según sus sedes, sus doctores y lo que necesite.',
        planTitle: 'El sistema completo',
        planBody: 'Todo lo de esta página, instalado y funcionando en su consultorio.',
        priceNote: 'Cada consultorio se cotiza por separado.',
        features: [
          'Agenda, fichas de pacientes y tratamientos',
          'Odontograma con historial por diente',
          'Asistente de Telegram para que sus pacientes reserven solos',
          'Recordatorios automáticos antes de cada cita',
          'Sus datos en su propio servidor, con copias de seguridad diarias',
        ],
        cta: 'Cotizar mi clínica',
        ctaFallback: 'Ver el recorrido',
        ctaNote: 'La cotización depende de sus sedes, sus doctores y lo que necesite.',
      },
      c2a: {
        title: '¿Lo vemos con los datos de su consultorio?',
        body: 'Le mostramos el sistema con sus doctores, sus horarios y sus tratamientos. Mientras tanto, los recorridos de esta página muestran cómo funciona.',
        primary: 'Pedir una demostración',
        fallback: 'Ver el recorrido',
        secondary: 'Cómo reserva un paciente',
      },
      footer: {
        tagline: 'Menos teléfono. Más tiempo con sus pacientes.',
        madeWith: 'Hecho junto a la Clínica Breton Otaño.',
        rights: 'N. Florentino software · Todos los derechos reservados.',
      },
    },
  },
  en: {
    translation: {
      meta: {
        title: 'N. Florentino software — Less time on the phone, more time with your patients',
        description:
          'Schedule, patient records and odontogram in one place for your dental practice. Patients book, change or cancel their own appointment on Telegram, at any hour, without calling.',
      },
      nav: {
        day: 'Your day',
        odontogram: 'Odontogram',
        schedule: 'Schedule',
        booking: 'Booking',
        roadmap: 'On the way',
        pricing: 'Pricing',
        cta: 'Watch the walkthrough',
        menu: 'Menu',
      },
      photos: {
        hero: 'Two doctors review a patient’s dental x-ray with them on a surgery screen.',
        odontogram: 'A dentist examines a patient’s teeth with a dental mirror.',
        modules: 'A person shows two toothbrushes to the camera.',
        roadmap: 'A dentist holds a dental model to explain a treatment.',
      },
      hero: {
        eyebrow: 'For dental practices',
        title: 'Less time on the phone.\nMore time with your patients.',
        body: 'Your schedule, your patient records and the odontogram, in one place. And while you treat patients, others book their own appointment on Telegram — at any hour, without calling the front desk.',
        primary: 'Watch the walkthrough',
        secondary: 'How a patient books',
        proof: 'In use at Clínica Breton Otaño.',
        videoCaption: 'Overall walkthrough · 22 seconds',
      },
      day: {
        eyebrow: 'A day in your practice',
        title: 'Built around how a real clinic works.',
        body: 'Not another program to learn. The same day you already have — with fewer calls, less paperwork and fewer gaps in the schedule.',
        moments: [
          {
            time: '8:00',
            title: 'You open the schedule and know how the day looks',
            body: 'Every appointment with its status: who confirmed, who is pending and who booked on their own.',
          },
          {
            time: '10:30',
            title: 'With the patient in the chair',
            body: 'Their record in view — allergies, past treatments and the odontogram, tooth by tooth.',
          },
          {
            time: '14:00',
            title: 'The front desk gets off the phone',
            body: 'Patients book, change or cancel by themselves. Your team looks after whoever is in the waiting room.',
          },
          {
            time: '23:00',
            title: 'Someone books while you rest',
            body: 'The appointment lands on the schedule, and the patient is reminded a day before and an hour before.',
          },
        ],
        chatCaption: 'How the assistant writes to your patients, word for word (in Spanish).',
        telegramWelcome: '¡Bienvenido! Comparta su número de teléfono para poder identificarlo.',
        telegramShare: 'Compartir mi número de teléfono',
        telegramBack: '¡Bienvenido de nuevo, María!',
        telegramMenu: ['Agendar Cita', 'Ver Citas', 'Reagendar Cita', 'Cancelar Cita'],
        telegramConfirmed: '✅ Cita agendada exitosamente para el 2026-09-24 a las 10:00 AM.',
        telegramTag: 'via Telegram',
      },
      odontogram: {
        eyebrow: 'Odontogram',
        title: 'Every tooth, with its history.',
        body: 'Mark caries, crowns or root canals surface by surface, in the FDI notation you already use. Every treatment is kept in the tooth\u2019s history, ready for the next visit.',
        chartTitle: 'Odontogram',
        chartHint: '32 teeth · FDI notation',
        demoTitle: 'Try it here',
        demoBody: 'Pick a status and tap a surface of the tooth. It works exactly like the real system.',
        demoTooth: 'Tooth',
        selectedStatus: 'Chosen status',
        surfacesLabel: 'Five surfaces',
        paletteLabel: 'Twelve clinical statuses',
        paintHint: 'Tap a surface',
        clear: 'Clear',
        regressionTitle: 'The history never goes backwards',
        regressionBody:
          'If a tooth has a crown and later gets a cleaning, the crown stays on record. A minor treatment never erases a major one.',
        priorityLabel: 'Priority',
      },
      schedule: {
        eyebrow: 'Schedule',
        title: 'A schedule that never double-books.',
        body: 'See the whole week with every appointment by status. The system only offers times that are genuinely free, so two patients never end up in the same slot.',
        rulesTitle: 'Before offering a time, it checks',
        rules: [
          'the clinic\u2019s opening hours',
          'each doctor\u2019s hours',
          'holidays and days off',
          'that no other appointment is there',
        ],
        legendTitle: 'Appointment statuses',
        realtime: 'When a patient books on Telegram, the appointment shows up on your front desk\u2019s screen right away.',
        slots: '30-minute appointments · patients see the next two weeks',
      },
      workflow: {
        eyebrow: 'Booking on Telegram',
        title: 'Your patient books in six steps.',
        body: 'No calls and nothing to install: your patients already have Telegram. They answer six simple questions and only see times that exist. If they make a mistake, they go back a step.',
        stepsTitle: 'The six steps',
        steps: ['Clinic', 'Treatment', 'Doctor', 'Date', 'Time', 'Reason'],
        videoCaption: 'How a patient books · 31 seconds',
        notes: [
          'They share their phone number once; from then on the assistant recognises them.',
          'New patients are registered on the spot with their name.',
          'They only see the doctors who do the treatment they chose.',
          'The appointment reaches your schedule as pending, marked as booked on Telegram.',
        ],
        remindersTitle: 'Automatic reminders',
        reminders: [
          { name: 'The day before', when: 'at 9:00' },
          { name: 'One hour before', when: 'the appointment' },
        ],
      },
      modules: {
        eyebrow: 'Everything included',
        title: 'What your practice needs, in one system.',
        body: 'Your team learns one screen and already knows the rest: they all work the same way.',
        videoCaption: 'The modules · 26 seconds',
        items: [
          {
            title: 'Schedule',
            body: 'Each doctor\u2019s week, with the status of every appointment.',
          },
          {
            title: 'Patient records',
            body: 'Contact details, ID, allergies, appointments and treatments in one place.',
          },
          {
            title: 'Odontogram',
            body: 'All 32 teeth, surface by surface, with their history.',
          },
          {
            title: 'Doctors and specialities',
            body: 'Each doctor with their hours, days off and what they treat.',
          },
          {
            title: 'One location or several',
            body: 'Each clinic with its own opening hours and closing days.',
          },
          {
            title: 'Treatments and fees',
            body: 'Each treatment with its price and duration, which sets how long the appointment lasts.',
          },
          {
            title: 'Messages to your patients',
            body: 'Send one Telegram message to all your patients at once.',
          },
          {
            title: 'Access for your team',
            body: 'Everyone sees and does only what their role needs.',
          },
        ],
      },
      journey: {
        eyebrow: 'The journey',
        title: 'From the first message to the chair.',
        body: 'A patient comes in through Telegram and leaves with their next appointment booked. This is what happens in between, without your team touching the phone.',
        step: 'Step',
        steps: [
          {
            label: 'Booking',
            title: 'The patient books on their own.',
            body: 'They write to the assistant on Telegram and pick clinic, treatment, doctor, date and time. They only see times that are genuinely free.',
          },
          {
            label: 'Confirmation',
            title: 'The appointment lands on the schedule.',
            body: 'It shows up as pending and marked as booked on Telegram. Your front desk sees it right away, with no calls.',
          },
          {
            label: 'Reminder',
            title: 'The system reminds them.',
            body: 'A day before and an hour before, the patient gets their reminder. Fewer gaps from forgotten visits.',
          },
          {
            label: 'In the chair',
            title: 'Their record, in view.',
            body: 'With the patient seated, you open their history: allergies, past treatments and the odontogram, tooth by tooth.',
          },
          {
            label: 'Treatment',
            title: 'Every tooth, with its history.',
            body: 'Mark what was done, surface by surface. It is saved, and the history never goes backwards.',
          },
          {
            label: 'Follow-up',
            title: 'The next visit, before they leave.',
            body: 'Book the next appointment right there, with the same assistant that already knows the patient.',
          },
        ],
      },
      roadmap: {
        eyebrow: 'On the way',
        title: 'What is next for your practice.',
        body: 'This is what we are building right now. If something here would help you, tell us — it also shapes the order.',
        chip: 'In development',
        items: [
          {
            title: 'Full booking on WhatsApp',
            body: 'The same flow your patients use on Telegram today — book, view, reschedule and cancel their appointment — on the WhatsApp they already use.',
          },
          {
            title: 'Treatment plans',
            body: 'Group the treatments a patient needs into a single plan, with costs, to present and agree in the chair.',
          },
          {
            title: 'Stage by stage, visit by visit',
            body: 'Split each plan into stages and follow its progress on every visit: what was done, what comes next and what is still pending.',
          },
        ],
      },
      pricing: {
        eyebrow: 'Pricing',
        title: 'A price shaped to your practice.',
        body: 'No fixed tiers and no per-user fees. We quote based on your locations, your doctors and what you need.',
        planTitle: 'The complete system',
        planBody: 'Everything on this page, installed and running in your practice.',
        priceNote: 'Every practice is quoted on its own.',
        features: [
          'Schedule, patient records and treatments',
          'Odontogram with a history for every tooth',
          'Telegram assistant so patients book on their own',
          'Automatic reminders before every appointment',
          'Your data on your own server, with daily backups',
        ],
        cta: 'Quote my clinic',
        ctaFallback: 'Watch the walkthrough',
        ctaNote: 'The quote depends on your locations, your doctors and what you need.',
      },
      c2a: {
        title: 'Shall we look at it with your practice\u2019s data?',
        body: 'We show you the system with your doctors, your hours and your treatments. In the meantime, the walkthroughs on this page show how it works.',
        primary: 'Ask for a demo',
        fallback: 'Watch the walkthrough',
        secondary: 'How a patient books',
      },
      footer: {
        tagline: 'Less time on the phone. More time with your patients.',
        madeWith: 'Built alongside Clínica Breton Otaño.',
        rights: 'N. Florentino software · All rights reserved.',
      },
    },
  },
};
