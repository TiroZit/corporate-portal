<script>
import Checklist from '@editorjs/checklist';
import CodeTool from '@editorjs/code';
import Delimiter from '@editorjs/delimiter';
import EditorJS from '@editorjs/editorjs';
import Embed from '@editorjs/embed';
import Header from '@editorjs/header';
import InlineCode from '@editorjs/inline-code';
import Link from '@editorjs/link';
import LinkAutocomplete from '@editorjs/link-autocomplete';
import List from '@editorjs/list';
import Marker from '@editorjs/marker';
import NestedList from '@editorjs/nested-list';
import Quote from '@editorjs/quote';
import Table from '@editorjs/table';
import TextVariantTune from '@editorjs/text-variant-tune';
import Underline from '@editorjs/underline';
import Warning from '@editorjs/warning';
import { updateArticle } from '~/entities/articles/api/apiArticles';
import { useToast } from '~/shared/ui/toast';

export default {
	name: 'EditArticle',
	props: {
		articleId: {
			type: String,
			default: '',
		},
		content: {
			type: Object,
		},
	},
	setup() {
		const { toast } = useToast();

		return {
			toast,
		};
	},
	data() {
		return {
			editor: null,
		};
	},
	mounted() {
		this.initEditor(this.content);
	},
	methods: {
		initEditor(outputData) {
			this.editor = new EditorJS({
				holder: 'hooliEditor',

				tools: {
					header: Header,
					nestedList: NestedList,
					list: List,
					table: Table,
					quote: Quote,
					warning: Warning,
					delimiter: Delimiter,
					checklist: Checklist,
					marker: Marker,
					underline: Underline,
					link: Link,
					inlineCode: InlineCode,
					linkTool: LinkAutocomplete,
					embed: Embed,
					code: CodeTool,
					textVariantTune: TextVariantTune,
				},

				data: outputData,

				readOnly: true,
			});
		},
		async onSave() {
			await this.editor.save().then(async (outputData) => {
				const { error } = await updateArticle({
					id: this.articleId,
					content: outputData,
				}, this.articleId);

				if (error) {
					this.toast({
						title: 'Ошибка!',
						description: error.message,
						variant: 'destructive',
					});
				}

				this.toast({
					title: 'Успех!',
					description: 'Статья обновлена',
					variant: 'success',
				});
			}).catch((error) => {
				this.toast({
					title: 'Ошибка!',
					description: error,
					variant: 'destructive',
				});
			});
		},

		onEdit() {
			this.editor.readOnly.toggle();
		},
	},
};
</script>

<template>
	<div class="my-5 flex gap-2">
		<Button
			size="icon"
			type="button"
			@click="onEdit"
		>
			<slot>
				<Icon name="ic:baseline-edit" size="20" class="shrink-0" />
			</slot>
		</Button>

		<Button
			size="icon"
			type="button"
			@click="onSave"
		>
			<slot>
				<Icon name="material-symbols:save" size="20" class="shrink-0" />
			</slot>
		</Button>
	</div>

	<div id="hooliEditor" />
</template>

<style lang="css">
/* Общие стили для EditorJS */
.codex-editor {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  line-height: 1.2;
  color: #333;
}

/* Стили для параграфов */
.ce-paragraph.cdx-block {
  margin-bottom: 20px;
  font-size: 1em;
  color: #333;
}

/* Стили для чек-листа */
.cdx-checklist {
  margin: 20px 0;
}

.cdx-checklist__item {
  display: flex;
  align-items: center;
  margin: 10px 0;
}

.cdx-checklist__item-checkbox {
  margin-right: 10px;
}

.cdx-checklist__item-text {
  font-size: 1.2em;
}

.cdx-checklist__item-checkbox-check svg {
  fill: #2c3e50;
}

/* Стили для делимитеров */
.ce-delimiter.cdx-block {
  text-align: center;
  margin: 20px 0;
}

.ce-delimiter.cdx-block hr {
  border: none;
  border-top: 2px dashed #ccc;
}

/* Стили для предупреждений */
.cdx-warning {
  background-color: #fce4e4;
  padding: 20px;
  border-left: 5px solid #e74c3c;
  margin: 20px 0;
}

.cdx-warning__title {
  font-weight: bold;
  color: #e74c3c;
  margin-bottom: 10px;
}

.cdx-warning__message {
  color: #c0392b;
}

/* Стили для вложенных списков */
.cdx-nested-list {
  margin: 20px 0;
  padding-left: 40px;
}

.cdx-nested-list__item {
  margin-bottom: 10px;
}

.cdx-nested-list__item-content {
  font-size: 1.2em;
}

/* Стили для цитат */
.cdx-quote {
  margin: 20px 0;
  padding: 20px;
  background-color: #f9f9f9;
  border-left: 5px solid #2c3e50;
  font-style: italic;
  color: #555;
}

.cdx-quote__text {
  margin-bottom: 10px;
}

.cdx-quote__caption {
  font-size: 0.9em;
  color: #888;
}

/* Стили для кода */
.ce-code {
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 20px;
  border-radius: 5px;
  overflow-x: auto;
}

.ce-code__textarea {
  width: 100%;
  background: none;
  border: none;
  color: inherit;
  font-family: monospace;
  resize: none;
}

/* Стили для контейнера редактора */
.codex-editor__redactor {
  padding-bottom: 300px;
}

/* Стили для блока */
/* .ce-block {
  margin-bottom: 20px;
}

.ce-block__content {
  padding: 10px 0;
} */

.ce-header {
	font-size: 36px;
}
</style>
