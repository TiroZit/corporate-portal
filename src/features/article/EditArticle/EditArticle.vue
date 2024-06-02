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
